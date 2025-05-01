import React, { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import FilterChips from "../components/FilterChips.jsx";
import { allDoctors } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";

const Appointments = () => {
  const [filters, setFilters] = useState({
    gender: "",
    specialty: "",
    language: "",
    maxFee: "",
  });

  const { query } = useAppContext();

  const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);

  useEffect(() => {
    let docs = allDoctors;

    if (filters.gender) {
      docs = docs.filter((doc) => doc.gender === filters.gender);
    }
    if (filters.specialty) {
      docs = docs.filter((doc) => doc.specialty === filters.specialty);
    }
    if (filters.language) {
      docs = docs.filter((doc) => doc.languages.includes(filters.language));
    }
    if (filters.maxFee) {
      docs = docs.filter((doc) => doc.videoPrice <= parseInt(filters.maxFee));
    }
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      docs = docs.filter((doc) => doc.name.toLowerCase().includes(lowerQuery));
    }

    setFilteredDoctors(docs);
  }, [filters, query]); // 👈 Add `query` to dependency array

  const handleRemoveFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: "" }));
  };

  const activeFilters = [
    filters.specialty && { key: "specialty", label: filters.specialty },
    filters.gender && { key: "gender", label: filters.gender },
    filters.maxFee && { key: "maxFee", label: `Rs.0-Rs.${filters.maxFee}` },
    filters.language && { key: "language", label: filters.language },
  ].filter(Boolean);

  const dropdownStyle =
    "bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 border-none appearance-none cursor-pointer";

  return (
    <div className="p-6 space-y-6">
      {/* FILTER DROPDOWNS - Centered */}
      <div className="flex flex-wrap justify-center gap-4">
        <select
          className={dropdownStyle}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, specialty: e.target.value }))
          }
        >
          <option value="">Expertise</option>
          <option value="Hair care">Hair care</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Orthopedist">Orthopedist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="General Practitioner">General Practitioner</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Urologist">Urologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
        </select>

        <select
          className={dropdownStyle}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, gender: e.target.value }))
          }
        >
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <select
          className={dropdownStyle}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, maxFee: e.target.value }))
          }
        >
          <option value="">Fees</option>
          <option value="500">Rs.0-Rs.500</option>
          <option value="1000">Rs.0-Rs.1000</option>
        </select>

        <select
          className={dropdownStyle}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, language: e.target.value }))
          }
        >
          <option value="">Languages</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Bengali">Bengali</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>

      {/* FILTER CHIPS - Right aligned */}
      <div className="w-full flex justify-end">
        <FilterChips
          appliedFilters={activeFilters}
          onRemove={handleRemoveFilter}
        />
      </div>

      {/* DOCTOR CARDS */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, idx) => <DoctorCard key={idx} {...doc} />)
        ) : (
          <p>No doctors found matching filters.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
