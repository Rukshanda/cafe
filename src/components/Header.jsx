import React from "react";
import Logo from "./Logo";
import SignUp from "./SignUp";
import Login from "./Login";
import { NavLink } from "react-router-dom";

function Header({
  isLoginVisible,
  setIsLoginVisible,
  isSignUpVisible,
  setIsSignUpVisible,
  handleSignUpSuccess,
  handleLoginSuccess,
  isLoggedIn,
  handleLogout,  
}) {
  const closeOverlay = () => {
    setIsLoginVisible(false);
    setIsSignUpVisible(false);
  };

  return (
    <>
      <div className="header">
        <div className="flex w-[100%] items-center nav-bar pl-[15px] pr-[15px] py-[10px]">
          
          <div className="nav-list items-center">
            <ul className="flex items-center gap-[30px]">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/aboutus" className="nav-link">About US</NavLink>
              <NavLink to="/blogs" className="nav-link">About US</NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink to="/profile" className="nav-link">Profile</NavLink>
                  <NavLink to="/cart" className="nav-link">Cart</NavLink>
                  
                  <li onClick={handleLogout} className="nav-link">Log out</li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      setIsSignUpVisible(true);
                      setIsLoginVisible(false);
                    }}
                  >
                    Sign Up
                  </li>
                  <li
                    onClick={() => {
                      setIsLoginVisible(true);
                      setIsSignUpVisible(false);
                    }}
                  >
                    Login
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {isLoginVisible && (
        <>
          <div className="bg-overlay" onClick={closeOverlay}></div>
          <div className="login-form">
            <button className="close-icon" onClick={closeOverlay}>
              X
            </button>
            <Login handleLoginSuccess={handleLoginSuccess} />
          </div>
        </>
      )}

      {isSignUpVisible && (
        <>
          <div className="bg-overlay" onClick={closeOverlay}></div>
          <div className="signup-form">
            <button className="close-icon" onClick={closeOverlay}>
              X
            </button>
            <SignUp onSignUpSuccess={handleSignUpSuccess} />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
