import React from "react";
import { FaStar } from "react-icons/fa";

const DoctorReviewsCard = ({ reviews }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 mt-6 max-w-full sm:max-w-lg mx-auto">
      <h2
        className="text-lg text-gray-800 mb-4 px-4 py-2"
        style={{
          background:
            "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
        }}
      >
        Featured Reviews ({reviews.length})
      </h2>
      <div className="space-y-4 p-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#FDFDFD] p-4 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    Consulted for {review.consultedFor}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2 sm:mt-0">{review.date}</p>
            </div>
            <div className="flex mt-2 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorReviewsCard;
