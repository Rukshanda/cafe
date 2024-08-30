import React from "react";
import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.png";
import about3 from "../images/about-3.jpg";
import about4 from "../images/about-4.jpg";
import about5 from "../images/about-5.jpg";
import about6 from "../images/about-6.png";
import about7 from "../images/about-7.jpg";
import mission from "../images/mission.png"
import vision from "../images/vision.png"
import values from "../images/values.png"

import person1 from "../images/person-1.jpg"
import person2 from "../images/person-2.jpg"
import person3 from "../images/person-3.jpg"
import person4 from "../images/person-4.jpg"
import person5 from "../images/person-5.jpg"
import person6 from "../images/person-6.jpg"
import person7 from "../images/person-7.jpg"
import person8 from "../images/person-8.jpg"
 
import ReviewSection from "./Reviews";

const images = [
  { id: "IMG1", src: about1 },
  { id: "IMG2", src: about2 },
  { id: "IMG3", src: about3 },
  { id: "IMG4", src: about4 },
  { id: "IMG5", src: about5 },
  { id: "IMG6", src: about6 },
  { id: "IMG7", src: about7 },
];

function AboutUs() {
  return (
    <div>
      <div className="banner">
        <div className="about-banner ">
          <div className="about-banner--bg">
            <h3 className="">About US</h3>
          </div>

          <div className="about-story flex pt-[150px] px-[120px] gap-[80px]">
            <div className="about-story--textsec w-[60%]">
              <h1>Our Story</h1>
              <br />
              <p className="text-[1.16rem] font-[500]">
                Our story began with a love for exceptional coffee and a desire
                to bring people together through every cup. We started by
                building relationships with farmers in [Country/Region], who
                share our commitment to quality and sustainability. These
                partnerships are the foundation of our brand, ensuring that
                every bean we use is ethically sourced and grown with respect
                for the environment.
                <br />
                <br />
                In our roastery, we carefully craft each batch of coffee to
                bring out the unique flavors of the beans. Our roasting process
                is a blend of precision and passion, designed to create a rich,
                satisfying experience in every sip.
                <br />
                What started as a small local coffee shop has grown into a
                vibrant community where coffee lovers gather to enjoy our
                carefully crafted brews. We’ve expanded our reach through our
                online presence, making it easier than ever for people to enjoy
                our coffee from the comfort of their homes.
                <br />
                <br />
                Despite our growth, our mission remains the same: to create
                coffee that not only tastes great but also makes a positive
                impact on the world. We’re dedicated to connecting people,
                supporting communities, and promoting sustainability in
                everything we do.
                <br />
                <br />
                Join us on our journey, and discover the passion and care that
                goes into every cup. Whether you’re visiting our café or
                enjoying our coffee at home, you’re part of a story that’s
                brewed with love and dedication.
              </p>
            </div>
            <div className="grid-container w-[40%]">
              {images.map((image) => (
                <div
                  key={image.id}
                  className={`grid-item ${image.id.toLowerCase()}`}
                >
                  <img src={image.src} alt={image.id} />
                </div>
              ))}
            </div>
          </div>
          <div className="about-cards py-[80px]  pt-[150px]">
              <div className="about-cards--boxes flex gap-[100px] justify-center">
                  <div className="about-cards--box flex flex-col items-center">
                    <div className="about-box--img  ">
                      <img src={mission} alt="" />
                    </div>
                    <div className="about-box--text text-center">
                    <h2 className="text-[1.5rem]">Mission</h2>
                    <p className="">We craft exceptional coffee that connects people, supports communities, and respects the planet. Through meticulous sourcing and roasting, we create memorable experiences and make a positive impact.</p>

                    </div>
                  </div>
 
                  <div className="about-cards--box flex flex-col items-center">
                    <div className="about-box--img  ">
                      <img src={vision} alt="" />
                    </div>
                    <div className="about-box--text text-center">
                    <h2 className="text-[1.5rem]">Vision</h2>
                    <p className="">We aim to lead in specialty coffee, inspiring a global community through quality, sustainability, and positive change, making coffee a catalyst for good, not just a beverage.</p>

                    </div>
                  </div>


                  <div className="about-cards--box flex flex-col items-center">
                    <div className="about-box--img  ">
                      <img src={values} alt="" />
                    </div>
                    <div className="about-box--text text-center">
                    <h2 className="text-[1.5rem]">Values</h2>
                    <p className="">We prioritize quality, sustainability, and community, crafting exceptional coffee with integrity, ethical sourcing, and environmental care, fostering connections in every cup.</p>

                    </div>
                  </div>
 


              </div>
          </div>
          <div className="about-team py-[80px] pt-[100px]">
            <div className="about-team--sec">
              <h1>Meet Our Team</h1>
              <div className="about-team--boxes">
                <div className="about-team--box flex flex-col gap-[20px] items-center">
                  <div className="team-box--img">
                  <img src={person1} alt="" className="w-full h-full" />
                  </div>
                  
                   <span>Lorem Ispum</span>
                </div>
                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person2} alt="" className="w-full h-full"/>
                  </div>

                   <span>Lorem Ispum</span>
                </div>
                <div className="about-team--box flex flex-col gap-[20px] items-center">
                     <div className="team-box--img">
                  <img src={person3} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>

                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person4} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>

                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person5} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>

                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person6} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>

                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person7} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>

                <div className="about-team--box flex flex-col gap-[20px] items-center">
                <div className="team-box--img">
                  <img src={person8} alt="" className="w-full h-full"/>
                  </div>
                   <span>Lorem Ispum</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          
          <ReviewSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
