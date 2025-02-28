import React from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-[8vw] py-[3vh]">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-[2vw] items-center text-md">
          <button className="cursor-pointer text-gray-700 hover:text-gray-900 transition">
            Recruiter Login
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
