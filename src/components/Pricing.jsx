import React, { useState } from "react";

const Pricing = () => {
  const [number, setNumber] = useState(1);
  const priceStarter = number * 80;
  const priceBusiness = number * 150;
  const handleNumber = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Pricing
      </h1>
      <div className="flex justify-center w-full gap-8 mb-8">
        <div className="w-1/3 flex flex-col justify-center rounded-lg shadow-lg h-40 p-8">
          <h2 className="text-xl text-gray-600 mb-4">Starter</h2>
          <p className="text-3xl font-bold mb-6">${priceStarter}/mo</p>
        </div>
        <div className="w-1/3 flex flex-col justify-center rounded-lg shadow-lg h-40 p-8">
          <h2 className="text-xl text-gray-600 mb-4">Business</h2>
          <p className="text-3xl font-bold mb-6">${priceBusiness}/mo</p>
        </div>
      </div>
      <p className="text-center text-gray-600 mb-4">{number} products</p>
      <div className="px-4 mb-8">
        <span className="text-xs sm:text-sm text-gray-600">1</span>
        <input
          type="range"
          min={1}
          max={50}
          value={number}
          onChange={handleNumber}
          className="flex-1 h-2 bg-gray-299 rounded-lg cursor-pointer"
        />
        <span className="text-xs sm:text-sm text-gray-600">50</span>
      </div>
      <h2 className="text-xl text-gray-600 mb-4">Ready get started?</h2>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default Pricing;
