import React from "react";
import { useParams } from "react-router-dom";
import { allDoctors, doctorDetails } from "../assets/assets.js";
import DoctorProfileCard from "../components/DoctorProfileCard.jsx";
import DoctorAboutCard from "../components/DoctorAbout.jsx";
import DoctorSpecializationsCard from "../components/DoctorSpecializationsCard.jsx";
import DoctorConcernsCard from "../components/DoctorConcernsCard.jsx";
import DoctorExperienceCard from "../components/DoctorExperienceCard.jsx";
import DoctorReviewsCard from "../components/DoctorReviewsCard.jsx";
import AppointmentBooking from "../components/AppointmentBooking.jsx";

const DoctorDetail = () => {
  const { id } = useParams();
  const doctorId = parseInt(id, 10);
  const doctor = allDoctors.find((doc) => doc.id === doctorId);
  const details = doctorDetails[doctorId];

  if (!doctor || !details) return <p>Doctor not found.</p>;

  return (
    <div className="p-6 space-y-6">
      <DoctorProfileCard doctor={doctor} />

      {/* Side-by-side layout with responsive stacking */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Doctor Details Section */}
        <div className="flex-1">
          <DoctorAboutCard
            about={details.about}
            languages={details.languages}
          />
          <DoctorSpecializationsCard
            specializations={details.specializations}
          />
          <DoctorConcernsCard concerns={details.concerns} />
          <DoctorExperienceCard
            experienceYears={details.experienceYears}
            experiences={details.experiences}
          />
          <DoctorReviewsCard reviews={details.reviews} />
        </div>

        {/* Appointment Booking Section */}
        <div className="flex-1">
          <AppointmentBooking />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
