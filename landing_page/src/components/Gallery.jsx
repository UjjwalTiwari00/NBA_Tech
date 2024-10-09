import React from "react";
import home_page_1 from "../images/home_page_1.jpg";
import home_page_6 from "../images/home_page_6.jpg";
import home_page_5 from "../images/home_page_7.jpg";
import pic2 from "../images/pic2.jpg";

export const Gallery = () => {
  return (
    <div className="bg-white text-center mt-16">
      <div className="py-16 bg-white">
        {/* Heading Section */}
        <div className="w-full h-72 bg-orange-500 text-white flex items-center justify-center">
          <h2 className="text-5xl font-bold p-3">Building Great Products</h2>
        </div>

        {/* Image Gallery Section */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 -mt-20 gap-4 p-8">
          <div className="h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={home_page_1} alt="Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={home_page_6} alt="Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={home_page_5} alt="Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={pic2} alt="Image 4" className="w-full h-full object-cover" />
          </div>
          <div className="h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={home_page_1} alt="Image 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
