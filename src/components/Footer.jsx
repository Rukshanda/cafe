import React from "react";
 import person1 from "../images/person-1.jpg"
import person2 from "../images/person-2.jpg"
import person3 from "../images/person-3.jpg"
import person4 from "../images/person-4.jpg"
import cofeebean from "../images/coffee-beans2.png"

import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-sec">
      <div className="footer flex md:flex-row flex-col gap-[180px] !justify-center items-center w-[100%]">
        <div className="footer-logo xsm:px-[50px] px-[10px] gap-[20px]  flex flex-col justify-center md:w-[40%] w-[100%] py-[40px]">
                    
        <div className='flex items-center  gap-[5px]'>
                <img src={cofeebean} alt="Coffee Beans" />
                <h1 className='logo-text2'>
                    Caffé
                </h1>
            </div>

          <div className="footer-logo--text">
            Awaken your senses with our artisan brews. Freshly roasted,
            passionately crafted. Join the coffee revolution today!
          </div>

          <div className="footer-social">
          <div className="social-icons">
            <ul className="flex flex-row w-[80%] items-center justify-between text-[1.5rem] mb-[10px] font-[800]" >
              <li className="iconBg">
                <FaFacebookF />
              </li>
              <li className="iconBg">
                <FaInstagram />
              </li>
              <li className="iconBg">
                <FaPinterestP />
              </li>
              <li className="iconBg">
                <FaXTwitter />
              </li>
            </ul>
          </div>
          <div className="card-icons">
            <ul className="flex flex-row w-[80%] items-center justify-between text-[1.5rem] font-[800]">
              <li className="iconBg">
                <FaCcPaypal />
              </li>
              <li className="iconBg">
                <FaCcDiscover />
              </li>
              <li className="iconBg">
                <FaCcMastercard />
              </li>
              <li className="iconBg">
                <FaCcVisa />
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footer-content-cont md:pt-[50px] flex xsm:flex-row flex-col justify-center items-start xsm:px-[50px] px-[10px]  lg:gap-[60px] md:!gap-[30px] sm:gap-[15px] xsm:!gap-[60px] gap-[30px] md:w-[55%] w-[100%]">
        <div className="footer-info w-full">
          <h3 className="tag-txt">Informtion</h3>
          <ul className="xsm:flex xsm:flex-col grid grid-cols-2  w-[100%] ">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>

          
        </div>
        <div className="footer-contributer w-full  ">
        <h3 className="tag-txt ">Contirbuters</h3>
          <ul className="xsm:flex xsm:flex-col grid grid-cols-2 ">
         

            <li className="flex flex-row items-center xsm:gap-[10px]  gap-[5px] xxsm:w-[180px] w-[100%] p-[10px] mt-[4px]">
              <span className="contributer-img">
                <img src={person1} alt="" className=" xsm:w-[50px] xsm:h-[50px] xxsm:size-[35px] xxsm:block rounded-full"/>
              </span>
              <span className="contirbuter-name">Jonas smith</span>
            </li>
            <li className="flex flex-row items-center xsm:gap-[10px]  gap-[5px] xxsm:w-[180px] w-[100%] p-[10px] mt-[4px]">
              <span className="contributer-img">
                <img src={person2} alt="" className=" xsm:w-[50px] xsm:h-[50px] xxsm:size-[35px] xxsm:block rounded-full"/>
              </span>
              <span className="contirbuter-name">Olivia Rodger</span>
            </li>
            <li className="flex flex-row items-center xsm:gap-[10px]  gap-[5px] xxsm:w-[180px] w-[100%] p-[10px] mt-[4px]">
              <span className="contributer-img">
                <img src={person3} alt="" className=" xsm:w-[50px] xsm:h-[50px] xxsm:size-[35px] xxsm:block rounded-full"/>
              </span >
              <span className="contirbuter-name">Thomas Rover</span>
            </li>
            <li className="flex flex-row items-center xsm:gap-[10px]  gap-[5px] xxsm:w-[180px] w-[100%] p-[10px] mt-[4px]">
              <span className="contributer-img">
                <img src={person4} alt="" className=" xsm:w-[50px] xsm:h-[50px] xxsm:size-[35px] xxsm:block rounded-full"/>
              </span>
              <span className="contirbuter-name">Vince Simon</span>
            </li>
          </ul>
        </div>
      <div className="footer-locations w-full">
        <div>
        <h3 className="tag-txt">Locations</h3>

        <ul className="xsm:flex xsm:flex-col grid grid-cols-2">
          <li className="loc-text">Lahore</li>
          <li className="loc-text">Karachi</li>
          <li className="loc-text">Islamabad</li>
          <li className="loc-text">Multan</li>
          <li className="loc-text">Quetta</li>
        </ul>
        </div>
     
      </div>
        </div>
      
       
      </div>
    </div>
  );
}

export default Footer;
