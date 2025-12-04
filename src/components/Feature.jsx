import React from "react";
import { features } from "../assets/data/data";
const Feature = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold mb-4">
        How can we help your business?
      </h1>
      <p className="text-center text-gray-600 mb-8">
        {" "}
        When you resell besnik, you build trust and increase
      </p>
      <div className="flex sm:flex-col md:flex-row gap-8">
        {features.map((item, index) => (
          <div className="flex flex-col items-center p-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center "
              style={{
                backgroundColor:
                  index === 0 ? "#f1effd" : index === 1 ? "#ffe7e7" : "#fff3e4",
              }}
            >
              <div className="text-3xl">{item.icon}</div>
            </div>
            <p className="text-2xl mb-3 font-semibold">{item.title}</p>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center ">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3  font-medium rounded-full">
          Become a Parther
        </button>
      </div>
    </div>
  );
};

export default Feature;
