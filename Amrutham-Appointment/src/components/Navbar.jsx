import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./Login";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, logout } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-amber-50 shadow-sm m-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl font-bold text-green-900 tracking-widest cursor-pointer">
              AMRUTAM
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-green-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Links */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } lg:flex space-x-8 items-center`}
          >
            <Link to="/" className="text-sm text-green-900 hover:font-medium">
              Home
            </Link>
            <Link
              to="/appointments"
              className="text-sm text-green-900 font-bold"
            >
              Find Doctors
            </Link>
            <Link to="/about" className="text-sm text-green-900 hover:font-medium">
              About Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4 items-center">
            {user ? (
              <>
                <span className="text-sm text-green-900">{user.email}</span>
                <button
                  onClick={logout}
                  className="px-4 py-1 border border-green-900 text-green-900 rounded-md text-sm hover:bg-green-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-1 border border-green-900 text-green-900 rounded-md text-sm hover:bg-green-50"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-1 bg-green-800 text-white rounded-md text-sm hover:bg-green-700"
                >
                  Sign-up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
