import React from "react";

const DoctorConcernsCard = ({ concerns }) => {
  const displayedConcerns = concerns.slice(0, 6);
  const remainingCount = concerns.length - displayedConcerns.length;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm max-w-full sm:max-w-lg overflow-hidden mt-3 mx-auto">
      <h2
        className="text-lg text-gray-800 mb-4 px-4 py-2"
        style={{
          background:
            "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
        }}
      >
        The Concerns I Treat
      </h2>
      <div className="flex flex-wrap gap-3 p-3">
        {displayedConcerns.map((concern, idx) => (
          <span
            key={idx}
            className="bg-[#F1F3F6] text-sm text-gray-800 px-4 py-2 rounded-full"
          >
            {concern}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="text-sm border border-gray-300 px-4 py-2 rounded-full">
            + {remainingCount} More
          </span>
        )}
      </div>
    </div>
  );
};

export default DoctorConcernsCard;
