import React from "react";
import z1 from "../Assects/z1.png";
import z2 from "../Assects/z2.png";
import z3 from "../Assects/z3.png";
import z4 from "../Assects/z4.png";
import z5 from "../Assects/z5.png";
import z6 from "../Assects/z6.png";

const AutoScrollMob = () => {
  return (
    <div className="md:hidden w-full min-h-[571px] bg-btnwhite">
      <div className="w-full h-full px-10 py-12 text-center">
        <h3 className="text-[50px] leading-[52px] font-medium tracking-[-2px]">
          Tools Covered
        </h3>
        <p className="inter font-medium text-[16px] leading-[19px] tracking-[-0.5px]">
          Get hands-on experience with emerging tools and technologies!
        </p>

        <div className="mt-4 flex flex-col gap-4 justify-center items-center">
          <img src={z1} alt="logo" />
          <img src={z2} alt="logo" />
          <img src={z3} alt="logo" />
          <img src={z4} alt="logo" />
          <img src={z5} alt="logo" />
          <img src={z6} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default AutoScrollMob;
