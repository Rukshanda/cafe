import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import { getCurrentUser, logout } from "./services/apiAuth"; // Import supabase functions
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
 import AboutUsPage from "./pages/AboutUsPage";
 import ProductsPage from "./pages/ProductsPage"
 
const App = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();
      setIsLoggedIn(!!user); // Set isLoggedIn based on user existence
    };
    checkUser();
  
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  

  const handleSignUpSuccess = () => {
    toast.success("Sign up successful! Please log in.");
    setIsSignUpVisible(false);
    setIsLoginVisible(true);
  };

  const handleLoginSuccess = () => {
    setIsLoginVisible(false);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile')
     } else {
      toast.error("Please log in first to access your profile.");
    }
  };
  
  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();
      setIsLoggedIn(!!user);
    };
    checkUser();

    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoginVisible || isSignUpVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isLoginVisible, isSignUpVisible]);

  return (
    <>
    
      <Topbar/>
      <Header
  isLoginVisible={isLoginVisible}
  setIsLoginVisible={setIsLoginVisible}
  isSignUpVisible={isSignUpVisible}
  setIsSignUpVisible={setIsSignUpVisible}
  handleSignUpSuccess={handleSignUpSuccess}
  handleLoginSuccess={handleLoginSuccess}
  isLoggedIn={isLoggedIn} // Pass isLoggedIn state
  handleLogout={handleLogout}
  handleProfileClick={handleProfileClick}
/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="allproducts" element={<ProductsPage />} />
        </Routes>
  
   <Footer/>
 
      <ToastContainer />
    </>
  );
};

export default App;
