import React from "react";

const NoData = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <img
          src="../assets/nodata.png"
          alt="No data"
          className=" h-40 w-40 lg:h-96 lg:w-96 object-contain"
        />
      </div>
    </>
  );
};

export default NoData;
