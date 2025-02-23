import React from 'react'
import search from '../../assets/search_icon.svg'
import location from '../../assets/location_icon.svg'
const Header = () => {
  return (
    <div>
    <div className="flex justify-center ">
    <div className="flex justify-center w-[95vw] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl m-[3vw] ">
    <div className=" h-[30vh] w-[40vw] m-[3vw] rounded-[2vh] flex flex-col text-center space-y-[4vh]">
        <p className="xl:text-5xl lg:text-4xl md:text-2xl font-semibold ">Over 10,000+ jobs to apply</p>
        <p className="xl:text-xl lg:text-lg md:text-md font-semibold ">Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        <div className=" flex justify-between items-center bg-white py-[1.5vh] px-[5vh] rounded-[1vh]">
          <div className="flex space-x-1">
          <img src={search} alt="" />
            <input type="text"  placeholder='please write here' className="appearance-none border-none outline-none focus:ring-0 focus:border-transparent bg-transparent p-2"/>
          </div>
          <div className="flex space-x-1">
          <img src={location} alt="" />
            <input type="text" placeholder='please write here'  className="appearance-none border-none outline-none focus:ring-0 focus:border-transparent bg-transparent p-2"/>
          </div>
          <div className="bg-red-300 font-bold py-[1vh] px-[5vw] rounded-[1vh]">Search</div>
        </div>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Header
