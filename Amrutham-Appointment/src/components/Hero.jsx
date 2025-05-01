// HeroSection.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import { useAppContext } from '../context/AppContext';

const HeroSection = () => {
  const {query,setQuery}=useAppContext();
  return (
    <section className="bg-green-50 py-16  m-0 text-center relative overflow-hidden">
      {/* Decorative circles if needed */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#bbf7d0_10%,transparent_10%)] bg-[length:200px_200px] opacity-20 pointer-events-none" />

      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 z-10 relative">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>

      <div className="mt-8 flex justify-center flex-wrap gap-4 z-10 relative">
        {/* Location Dropdown */}
        <div className="flex items-center px-4 py-2 bg-white rounded-md shadow-sm border text-sm text-gray-700 space-x-2">
          <FaMapMarkerAlt className="text-green-600" />
          <span>Select Location</span>
          <FiChevronDown className="text-gray-500" />
        </div>

        {/* Search Input */}
        <div className="flex items-center bg-white rounded-md shadow-sm border overflow-hidden text-sm">
          <input
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            className="px-4 py-2 outline-none w-64 sm:w-80"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <button className="px-3 bg-transparent text-green-700">
            <HiArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
