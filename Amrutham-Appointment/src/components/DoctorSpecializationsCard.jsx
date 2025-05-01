import React from "react";
import { RiWomenLine } from "react-icons/ri";

const DoctorSpecializationsCard = ({ specializations }) => {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 max-w-full sm:max-w-lg mt-3 mx-auto">
      <h2
        className="text-lg text-gray-800 mb-4 px-4 py-2"
        style={{
          background:
            "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
        }}
      >
        I Specialize In
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {specializations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#FFFBF2] px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <RiWomenLine className="text-3xl text-gray-600 mb-2" />
            <p className="text-sm text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSpecializationsCard;
