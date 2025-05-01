import React from "react";
import { FaStar, FaGraduationCap } from "react-icons/fa";
import { LuPill } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const DoctorCard = ({
  id,
  name,
  image,
  rating,
  specialty,
  experience,
  languages,
  videoPrice,
  chatPrice,
}) => {
  const navigate = useNavigate();

  // Handle View Profile button click
  const handleViewProfile = () => {
    navigate(`/doctor/${id}`);  // Navigate to the doctor profile page using the doctor's id
  };

  return (
    <div className="bg-[#fdf6e3] rounded-xl shadow-md p-4 w-full flex flex-col items-center space-y-3">
      {/* Image and rating */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-2 border-white shadow"
        />
        <div className="absolute bottom-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span>{rating}</span>
          <FaStar className="text-yellow-400" />
        </div>
      </div>

      {/* Info */}
      <h2 className="text-lg font-semibold text-center">{name}</h2>
      <p className="text-sm text-gray-600 flex gap-2 items-center">
        <LuPill /> {specialty}
      </p>
      <p className="text-sm text-gray-500 flex gap-2 items-center">
        <FaGraduationCap /> {experience} years of Experience
      </p>
      <p className="text-sm text-gray-500 flex gap-2 items-center">
        <IoChatboxEllipsesOutline /> Speaks: {languages}
      </p>

      {/* Consultation fees */}
      <div className="flex gap-2 text-sm text-gray-700">
        <div className="border px-2 py-1 rounded">
          Video Consultation <br /> ₹{videoPrice}
        </div>
        <div className="border px-2 py-1 rounded">
          Chat Consultation <br /> {chatPrice}
        </div>
      </div>

      {/* Buttons */}
      <button
        className="w-full border border-gray-400 text-gray-700 py-1 rounded-md hover:bg-gray-100 transition"
        onClick={handleViewProfile}  // Handle the click event
      >
        View Profile
      </button>
      <button className="w-full bg-green-900 text-white py-1 rounded-md hover:bg-green-700 transition">
        Book a consultation
      </button>
    </div>
  );
};

export default DoctorCard;
