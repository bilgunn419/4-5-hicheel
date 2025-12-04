import React from "react";
import { services } from "../assets/data/data";

const Service = () => {
  return (
    <div className="w-full flex p-8  mx-auto">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
          Future of support with new shape
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Discuss your goals, determine succes metrics, identify problems
        </p>
        <p className="flex justify-start items-center">
          <div className="w-5 h-5 flex rounded-full bg-indigo-100 items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 flex items-center justify-center"></div>
          </div>
          UX design content strategy
        </p>
        <p className="flex justify-start items-center">
          <div className="w-5 h-5 flex rounded-full bg-indigo-100 items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 flex items-center justify-center"></div>
          </div>
          Development bring
        </p>
        <button className="mt-8 w-[30%] bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full  hover:bg-indigo-700 transition-colors">
          Get started
        </button>
      </div>
      <div className="w-1/2 flex flex-wrap gap-8">
        {services.map((item) => (
          <div className="w-[40%] h-[50%] flex   flex-col ">
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a
              className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              href={item.link}
            >
              LEARN MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
