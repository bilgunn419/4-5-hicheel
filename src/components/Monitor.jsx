import React from "react";
import leftImage from "../assets/monitor-card.webp";
const Monitor = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col justify-center px-16 ">
        <h1 className="text-emerald-800 ont-semibold">MONITOR</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
          Introducing best mobile carousels
        </h2>
        <p className="text-gray-800 mb-8">
          Before the ship is really back. Round, round, all round the world.
          Round all around the world. Round, all aroudn the world. Round, all
          around the world.
        </p>
        <div className="flex items-center ">
          <p className="text-blue-500 font-semibold">
            Learn more about monitoring
          </p>
          <p className="text-blue-500 font-semibold text-2xl">→</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={leftImage} alt="" />
      </div>
    </div>
  );
};

export default Monitor;
