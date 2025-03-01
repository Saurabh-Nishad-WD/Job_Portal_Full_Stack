import React from "react";
import logo from "../../assets/logo.svg";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";  // For redirection after logout

const Navbar = () => {
  const { openSignIn, signOut } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate(); // Initialize navigation for redirecting

  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-[8vw] py-[3vh]">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-[2vw] items-center text-md">
          {!isSignedIn ? (
            /* Show "Login" when user is not signed in */
            <button 
              onClick={openSignIn} 
              className="cursor-pointer text-gray-700 hover:text-gray-900 transition"
            >
              Recruiter Login
            </button>
          ) : (
            <>
              {/* User Profile Button */}
              <UserButton afterSignOutUrl="/" />
              
              {/* Logout Button */}
              <button
                onClick={() => {
                  signOut();  // Sign the user out
                  navigate("/");  // Redirect to homepage
                }}
                className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
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
