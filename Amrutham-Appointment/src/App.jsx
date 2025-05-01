import React from "react";
import { Routes, Route } from "react-router-dom"; // Import useNavigate
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // You can keep this for a home route
import DoctorDetail from "./pages/DoctorDetail"; // Import new DoctorDetail page

const App = () => {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />{" "}
        {/* New route for doctor detail */}
      </Routes>
    </div>
  );
};

export default App;
