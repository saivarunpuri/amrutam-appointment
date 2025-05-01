import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const DoctorAboutCard = ({ about, languages }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden mx-auto">
      {/* Header */}
      <div
        className="flex justify-between items-center px-4 py-3"
        style={{
          background: "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
        }}
      >
        <h3 className="text-lg text-gray-800">A Little About me</h3>
        <button className="border border-gray-300 text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-gray-100">
          Follow <span className="text-xl leading-none">+</span>
        </button>
      </div>

      {/* Description */}
      <div className="px-4 pt-3 pb-4 border-b">
        <p className="text-sm text-gray-500 leading-relaxed mb-2">
          {about.slice(0, 150)}...
        </p>
        <p className="text-sm text-right text-gray-700 font-medium hover:underline cursor-pointer">
          Read More
        </p>
      </div>

      {/* Languages */}
      <div className="px-4 py-4 border-b">
        <p className="text-sm font-medium text-gray-700 mb-2">Languages Spoken</p>
        <div className="flex gap-2 flex-wrap">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="bg-gray-100 text-sm px-4 py-1 rounded-full text-gray-700"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="px-4 py-4 flex gap-4 justify-center sm:justify-start">
        <IconButton icon={<FaFacebookF />} />
        <IconButton icon={<FaInstagram />} />
        <IconButton icon={<FaYoutube />} />
        <IconButton icon={<FaTwitter />} />
      </div>
    </div>
  );
};

const IconButton = ({ icon }) => (
  <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-600 text-lg">
    {icon}
  </button>
);

export default DoctorAboutCard;
