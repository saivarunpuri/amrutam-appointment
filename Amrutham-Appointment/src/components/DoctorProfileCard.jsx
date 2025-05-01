import React from "react";

const DoctorProfileCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-full max-w-6xl mx-auto">
      {/* Header Background */}
      <div className="bg-[#D1E8D1] h-28 relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-white absolute -bottom-14 left-8"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#FFFCF6] pt-16 pb-6 px-8 flex flex-col md:flex-row md:items-center justify-between">
        {/* Left: Name, specialty, rating */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-1">
              {doctor.name}
              {doctor.verified && (
                <span className="text-blue-600 text-lg">✔️</span>
              )}
            </h2>
            <p className="text-green-700 text-sm font-medium">
              {doctor.specialty}
            </p>
            <div className="flex items-center text-sm mt-1">
              <span className="text-gray-600 mr-1">{doctor.rating}</span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
          </div>
        </div>

        {/* Center: Stats */}
        <div className="flex gap-8 mt-6 md:mt-0 text-center">
          <div>
            <p className="text-sm text-gray-600">Followers</p>
            <p className="font-bold text-lg">180</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Following</p>
            <p className="font-bold text-lg">10</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Posts</p>
            <p className="font-bold text-lg">200</p>
          </div>
        </div>

        {/* Right: Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
