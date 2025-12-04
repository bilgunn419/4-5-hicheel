import React from "react";
import { purposeData } from "../assets/data/data";
const Purpose = () => {
  return (
    <div className="flex sm:flex-col gap-8 px-4 md:px-8">
      <div className="flex flex-col gap-2 grow-1">
        <p className="text-purple-600">ACHIEVE MORE</p>
        <p className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-800">
          Purpose of a convoy is to keep your team
        </p>
      </div>
      <div className="flex grow-2 justify-between sm:flex-col md:flex-row">
        {purposeData.map((item) => (
          <div className="flex gap-2 p-4">
            <div className="py-2 w-12 h-12 flex items-center justify-center ">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
