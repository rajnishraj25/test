import React from "react";
import logo2 from "../Assects/logo2.png";

const Collabration = () => {
  return (
    <div className="w-full h-[285px] md:h-[289px] ">
      <div className="w-full h-full px-10 py-9 md:px-24 md:py-9 text-center">
        <div className="flex flex-col gap-4 md:gap-6 text-btnwhite">
          <p className="inter font-light text-[16px] leading-[19px] tracking-[-0.025px] md:text-[24px] md:leading-[25px] md:tracking-tighter text-center">
            In collaboration with
          </p>
          <div className="text-center flex justify-center">
            <img src={logo2} alt="logo" />
          </div>
          <p className="inter text-[14px] leading-[16px] font-light md:text-[24px] md:leading-[25px] tracking-[-0.5px] text-center  m-auto">
            Futurense, as the Godfather of Talent, provides an ideal platform
            for the Talent to unlock its true potential. Our career-accelerating
            ecosystem of finding, supporting, and inspiring potential Talent
            enables Businesses to connect with an untapped Talent pool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collabration;
