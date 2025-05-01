import React from "react";
import { FaHospitalAlt } from "react-icons/fa";

const DoctorExperienceCard = ({ experienceYears, experiences }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 mt-6 max-w-full sm:max-w-lg mx-auto">
      <h2
        className="text-lg text-gray-800 mb-4 px-4 py-2"
        style={{
          background:
            "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
        }}
      >
        My Work Experience
      </h2>
      <p className="text-green-700 font-semibold mb-4 p-3">
        I HAVE BEEN IN PRACTICE FOR : {experienceYears}+ YEARS
      </p>
      <hr className="mb-4" />
      {experiences.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start justify-between mb-4 p-3">
          <div className="flex gap-3 mb-2 sm:mb-0">
            <div className="text-blue-600 mt-1">
              <FaHospitalAlt className="text-xl" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{item.place}</p>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 whitespace-nowrap sm:ml-auto">
            {item.period}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorExperienceCard;
