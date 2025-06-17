import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";  
import brand1 from "../images/brand-1.png";
import brand2 from "../images/brand-2.png";
import brand3 from "../images/brand-3.png";
import brand4 from "../images/brand-4.png";
import brand5 from "../images/brand-5.png";
import brand6 from "../images/brand-6.png";
import brand7 from "../images/brand-7.png";

function BrandBar() {
  // Array of brand logos
  const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div className="brand-sec md:py-[30px] md:px-[40px] py-[15px] px-[20px]">
      <div className="brand ">
        <div className="brand-bar w-[100%]">
          {/* Marquee Implementation */}
          <Marquee fade={true} pauseOnHover={true} className="gap-[3rem] [--duration:15s]" innerClassName="gap-[3rem] [--gap:3rem]">
            {/* Map through the brandLogos array */}
            {brandLogos.map((brand, index) => (
              <div key={index} className="md:w-[150px] md:h-[100px] w-[100px] h-[80px] flex-shrink-0">
                <img src={brand} alt={`Brand Logo ${index + 1}`} className="w-full h-full" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default BrandBar;
