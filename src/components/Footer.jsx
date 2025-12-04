import React from "react";
import { footerLinks } from "../assets/data/data.jsx";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-8 flex px-16">
      <div className="w-1/4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <h1 className="text-xl font-semibold">The Next Design</h1>
        </div>
        <div className="mb-8">
          <p className="text-gray-600">
            The copy warned the Little Blind Text, that where it came from it
            would have been rewritten a thousand times
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
            <FaFacebook className="w-5 h-5 text-gray-600" />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
            <FaTwitter className="w-5 h-5 text-gray-600" />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
            <FaLinkedinIn className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
      <div className="flex w-2/3 gap-16 ml-20">
        {Object.entries(footerLinks).map(([items, link], ) => (
          <div>
            <p className="text-xl font-semibold capitalize mb-2">{items}</p>
            <div className="flex flex-col gap-2">
              {link.map((link,) => (
                <a href={link.href}>{link.name}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;