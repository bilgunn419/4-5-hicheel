import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
const CompanyLogo = () => {
  const logo = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div
      className="w-full container mx-auto py-20 
    overflow-x-hidden flex flex-col sm:flex-row sm:items-center items-start"
    >
      <div
        className="w-[300px] px-8 text-gray-800 border-l-4
         border-blue-400 bg-white py-2 sm:text-base text-xl font-semibold mb-8 sm:mb-0 z-10 shrink-0"
      >
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-slider whitespace-nowrap gap-5  ">
        {logo.map((logo) => (
          <img
            src={logo}
            alt=" "
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 
            hover:opacity-100 transition-all"
          />
        ))}
        {logo.map((logo) => (
          <img
            src={logo}
            alt=""
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 
            hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
