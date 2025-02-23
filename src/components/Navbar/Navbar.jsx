import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between px-[8vw] py-[4vh] bg-gray-300">
        <div className="logo text-xl">
            <img src={logo} alt="" />
        </div>
        <div className="flex space-x-[2vw] items-center xl:text-lg md:text-md ">
            <div className="cursor-pointer">Recruiter Login</div>
            <div className="cursor-pointer bg-red-400 px-[15px] py-[5px] rounded-[1vh] ">Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
