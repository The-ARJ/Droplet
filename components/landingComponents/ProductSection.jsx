import React from "react";
import ProductSection1 from "./ProductSection1";
import ProductSection2 from "./ProductSection2";

const ProductSection = () => {
  return (
    <>
      <section id="about" className=" ">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="text-center mb-10 text-xl md:text-4xl font-bold text-black dark:text-white">
            Meet Our Service
          </div>
          <ProductSection1 />
          <ProductSection2 />
        </div>
      </section>
    </>
  );
};


export default ProductSection;
