import React from "react";
import { HiStar } from "react-icons/hi";
import heroImage from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section className="pt-50 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 mx-auto">
        <div className="w-full md:w-1/2  space-y-8">
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer ">
            <HiStar className="fill-blue-600 hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Jump start your growth</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            We boost the growth for{" "}
            <span className="text-blue-600 relative inline-block">
              Startup to Furtune 500
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/30"></span>
            </span>
            Companies{" "}
            <span className="inline-block ml-2 animate-pulse">⏰</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            Get the most accurate leads, sales people training and conversions,
            tools and more - all within the same one billing.
          </p>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-4 border border-gray rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-2xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 ">
              →
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-16  space-y-8">
          <img
            className=" rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
