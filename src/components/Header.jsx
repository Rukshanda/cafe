import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaBagShopping, FaUser } from "react-icons/fa6";
 import "react-toastify/dist/ReactToastify.css";

function Header({
  isLoginVisible,
  setIsLoginVisible,
  isSignUpVisible,
  setIsSignUpVisible,
  handleSignUpSuccess,
  handleLoginSuccess,
  handleProfileClick,
  isLoggedIn,
  handleLogout,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeOverlay = () => {
    setIsLoginVisible(false);
    setIsSignUpVisible(false);
  };

  

  const handleLogoutClick = () => {
    handleLogout();  
    navigate("/");  
  };

  return (
    <>
      <div className="header">
        <div className="flex w-[100%] items-center nav-bar md:px-[15px] py-[10px] justify-between">
          
          {/* Hamburger Menu for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none flex justify-center items-center"
            >
              <FaBars className="text-[1.6rem] text-[#f5f5dc]" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <div className="hidden md:!flex items-center">
            <ul className="flex items-center gap-[30px]">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
              <NavLink to="/allproducts" className="nav-link">Products</NavLink>
              
              {isLoggedIn ? (
                <li onClick={handleLogoutClick} className="nav-link">Log out</li>
              ) : (
                <>
                  <li
                    onClick={() => {
                      setIsSignUpVisible(true);
                      setIsLoginVisible(false);
                    }}
                    className="nav-link"
                  >
                    Sign Up
                  </li>
                  <li
                    onClick={() => {
                      setIsLoginVisible(true);
                      setIsSignUpVisible(false);
                    }}
                    className="nav-link"
                  >
                    Login
                  </li>
                </>
              )}
            </ul>
          </div>

           <div className="flex items-start gap-4 md:gap-6">
            <div className="profile-icon">
              <button onClick={handleProfileClick} className="nav-link">
                <FaUser className="text-[1.5rem]" />
              </button>
            </div>

            <div className="cart-icon">
              <NavLink to="/cart" className="nav-link">
                <FaBagShopping className="text-[1.5rem]" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0 w-[75%]" : "translate-x-full w-0"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            X
          </button>
          <ul className="flex flex-col items-start p-6 gap-6">
            <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/aboutus" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/allproducts" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Products</NavLink>

            {isLoggedIn ? (
              <>
                 <li onClick={() => { handleLogoutClick(); setIsMobileMenuOpen(false); }} className="nav-link">Log out</li>
              </>
            ) : (
              <>
                <li
                  onClick={() => {
                    setIsSignUpVisible(true);
                    setIsLoginVisible(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="nav-link"
                >
                  Sign Up
                </li>
                <li
                  onClick={() => {
                    setIsLoginVisible(true);
                    setIsSignUpVisible(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="nav-link"
                >
                  Login
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {isLoginVisible && (
        <>
          <div className="bg-overlay" onClick={closeOverlay}></div>
          <div className="login-form">
            <button className="close-icon" onClick={closeOverlay}>X</button>
            <Login handleLoginSuccess={handleLoginSuccess} />
          </div>
        </>
      )}

      {isSignUpVisible && (
        <>
          <div className="bg-overlay" onClick={closeOverlay}></div>
          <div className="signup-form">
            <button className="close-icon" onClick={closeOverlay}>X</button>
            <SignUp onSignUpSuccess={handleSignUpSuccess} />
          </div>
        </>
      )}
 
    </>
  );
}

export default Header;
