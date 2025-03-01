import React from "react";
import logo from "../../assets/logo.svg";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";  // For redirection after logout

const Navbar = () => {
  const { openSignIn, signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate(); // Initialize navigation for redirecting

  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-[8vw] py-[3vh]">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-[1vw] items-center text-sm">
          {!user ? (
            /* Show "Login" when user is not signed in */
            <button 
              onClick={openSignIn} 
              className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-950 bg-[length:200%_100%] hover:bg-[position:right] px-[9px] py-[2px] rounded-[4px] text-white transition-all duration-500 ease-in-out"

            >
             Login
            </button>
          ) : (
            <>

            <Link to={'/application'}>
              Applied Jobs
            </Link>
            <p>|</p>
            <p className="hidden  md:block">Hi, {user.firstName + " " + user.lastName}</p>


              {/* User Profile Button */}
              <UserButton afterSignOutUrl="/" />
              
              {/* Logout Button */}
              <button
                onClick={() => {
                  signOut();  // Sign the user out
                  navigate("/");  // Redirect to homepage
                }}
                className="hidden xl:block  cursor-pointer bg-red-500 text-sm text-white px-[4px] py-[3px] rounded-[4px] hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
