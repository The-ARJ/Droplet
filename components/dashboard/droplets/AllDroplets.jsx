import React, { useEffect, useState } from "react";
import DropletService from "../../../utils/Services/DropletServices";
import TemplateService from "../../../utils/Services/TemplateServices";
import NoData from "../NoData";
import Pagination from "./Pagination";
import DropletComponent from "./Droplets";
import deleteDroplet from "./DeleteDroplet";

const AllDroplets = () => {
  const [dropletsData, setDropletsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4; // Number of droplets to display per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const getDroplets = () => {
    const token = localStorage.getItem("token");
    const limit = pageSize;
    const offset = (currentPage - 1) * pageSize;
    DropletService.getAllDroplets(token, limit, offset)
      .then((res) => {
        const droplets = res.data.data;
        const templatePromises = droplets.map((droplet) => {
          if (droplet.isPublished) {
            return TemplateService.getTemplateById(droplet.template);
          } else {
            return Promise.resolve(null);
          }
        });
        Promise.all(templatePromises)
          .then((templateResponses) => {
            const dropletsWithTemplateData = droplets.map((droplet, index) => {
              if (droplet.isPublished) {
                return {
                  ...droplet,
                  templateData: templateResponses[index]?.data,
                };
              } else {
                return droplet;
              }
            });

            setDropletsData(dropletsWithTemplateData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDroplets();
  }, [currentPage]);

  return (
    <>
      {dropletsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dropletsData.slice(startIndex, endIndex).map((droplet) => (
            <DropletComponent
              key={droplet.id}
              droplet={droplet}
              deleteDroplet={() => deleteDroplet(droplet._id, getDroplets)}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDroplets={dropletsData.length}
      />
    </>
  );
};

export default AllDroplets;
