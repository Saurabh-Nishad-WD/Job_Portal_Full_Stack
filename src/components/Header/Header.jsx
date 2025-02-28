import React from 'react'
import search from '../../assets/search_icon.svg'
import location from '../../assets/location_icon.svg'
import img1 from '../../assets/amazon_logo.png'
import img2 from '../../assets/twitter_icon.svg'
import img3 from '../../assets/walmart_logo.svg'
import img4 from '../../assets/samsung_logo.png'
import img5 from '../../assets/microsoft_logo.svg'
import img6 from '../../assets/facebook_icon.svg'
import img7 from '../../assets/instagram_icon.svg'
const Header = () => {
  return (
    <div>
    <div className="flex flex-col justify-center ">
    <div className="flex justify-center h-[50vh] 2xl:h-[45vh] w-[95vw] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl m-[3vw] ">
    <div className=" h-[30vh] w-[40vw] m-[3vw] rounded-[2vh] flex flex-col text-center space-y-[4vh]">
        <p className="xl:text-5xl lg:text-4xl md:text-2xl text-xl font-semibold ">Over 10,000+ jobs to apply</p>
        <p className="xl:text-xl lg:text-lg md:text-md text-sm xl:font-semibold text-gray-100">Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        <div className="flex flex-col 2xl:flex-row justify-between items-center bg-white py-4 px-6 rounded-lg w-full max-w-[800px] mx-auto">
  
  {/* First Input Section */}
  <div className="flex items-center space-x-2 w-full md:w-auto mb-2 md:mb-0">
    <img src={search} alt="" className="w-6 h-6" />
    <input 
      type="text"  
      placeholder="Please write here" 
      className="w-full md:w-auto appearance-none border-none outline-none focus:ring-0 focus:border-transparent bg-transparent p-2"
    />
  </div>

  {/* Second Input Section */}
  <div className="flex items-center space-x-2 w-full md:w-auto mb-2 md:mb-0">
    <img src={location} alt="" className="w-6 h-6" />
    <input 
      type="text" 
      placeholder="Please write here"  
      className="w-full md:w-auto appearance-none border-none outline-none focus:ring-0 focus:border-transparent bg-transparent p-2"
    />
  </div>

  {/* Search Button */}
  <div className="bg-red-300 font-bold py-2 px-6 rounded-lg w-full md:w-auto text-center cursor-pointer">
    Search
  </div>
</div>

    </div>
    </div>
    <div className="companies flex flex-col md:flex-row items-center justify-between px-[10vw] border border-gray-500 py-[2vh] bg-gray-300 mt-[-4vh] mx-[5vh]">
      <p className="text-xl font-bold">Trusted By</p>
      <div className="flex flex-col md:flex-row justify-between  w-[33vw]">
      <img src={img1} alt="" className="h-[4vh] w-auto "/>
      <img src={img2} alt="" className="h-[4vh] w-auto "/>
      <img src={img3} alt="" className="h-[4vh] w-auto "/>
      <img src={img4} alt="" className="h-[4vh] w-auto "/>
      </div>
      <div className="flex flex-col md:flex-row justify-between  w-[33vw]">
      <img src={img5} alt="" className="h-[4vh] w-auto "/>
      <img src={img6} alt="" className="h-[4vh] w-auto "/>
      <img src={img7} alt="" className="h-[4vh] w-auto "/>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Header
