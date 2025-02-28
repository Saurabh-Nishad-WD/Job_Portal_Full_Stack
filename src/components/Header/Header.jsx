import React from "react";
import search from "../../assets/search_icon.svg";
import location from "../../assets/location_icon.svg";
import img1 from "../../assets/amazon_logo.png";
import img2 from "../../assets/twitter_icon.svg";
import img3 from "../../assets/walmart_logo.svg";
import img4 from "../../assets/samsung_logo.png";
import img5 from "../../assets/microsoft_logo.svg";
import img6 from "../../assets/facebook_icon.svg";
import img7 from "../../assets/instagram_icon.svg";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center">
      {/* Hero Section */}
      <div className="  flex justify-center h-[50vh] 2xl:h-[45vh] w-[95vw] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl m-[3vw] shadow-lg">
        <div className="h-[30vh] w-[40vw] m-[3vw] flex flex-col text-center space-y-[2vh] sm:space-y-[4vh]">
          <p className="xl:text-[4xl] lg:text-[3xl] md:text-2xl text-xl font-semibold text-white">
            Over 10,000+ jobs to apply
          </p>
          <p className=" lg:text-[15px] md:text-[13px] text-[10px] xl:font-semibold text-gray-100">
            Your Next Big Career Move Starts Right Here - Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>

          {/* Search Bar */}
          <div className="flex flex-col xl:flex-row justify-between items-center bg-white py-4 px-6 rounded-lg w-full max-w-[800px] mx-auto shadow-md">
            {/* First Input */}
            <div className="flex items-center space-x-2 w-full md:w-auto mb-2 md:mb-0">
              <img src={search} alt="Search Icon" className="w-6 h-6" />
              <input
                type="text"
                placeholder="Job title, keyword..."
                className="w-full md:w-auto border-none outline-none focus:ring-0 bg-transparent p-2"
              />
            </div>

            {/* Second Input */}
            <div className="flex items-center space-x-2 w-full md:w-auto mb-2 md:mb-0">
              <img src={location} alt="Location Icon" className="w-6 h-6" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full md:w-auto border-none outline-none focus:ring-0 bg-transparent p-2"
              />
            </div>

            {/* Search Button */}
            <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg w-full md:w-auto text-center cursor-pointer hover:bg-red-600 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="companies flex flex-col md:flex-row items-center justify-between px-[10vw] border border-gray-400 py-[2vh] bg-gray-300 mt-[-4vh] mx-[5vh] rounded-lg shadow-md">
        <p className="text-xl font-bold">Trusted By</p>

        <div className="grid grid-cols-4 md:flex justify-between items-center gap-4 w-full max-w-[700px]">
          <img src={img1} alt="Amazon" className="h-[4vh] w-auto" />
          <img src={img2} alt="Twitter" className="h-[4vh] w-auto" />
          <img src={img3} alt="Walmart" className="h-[4vh] w-auto" />
          <img src={img4} alt="Samsung" className="h-[4vh] w-auto" />
          <img src={img5} alt="Microsoft" className="h-[4vh] w-auto" />
          <img src={img6} alt="Facebook" className="h-[4vh] w-auto" />
          <img src={img7} alt="Instagram" className="h-[4vh] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
