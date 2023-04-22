import React from "react";
import logo2 from "../Assects/logo2.png";

const Collabration = () => {
  return (
    <div className="w-full h-[289px]">
      <div className="container w-full h-full px-24 py-9 text-center">
        <div className="flex flex-col gap-6 text-btnwhite">
          <p className="inter font-light text-[24px] leading-[25px] tracking-tighter text-center">
            In collaboration with
          </p>
          <div className="text-center flex justify-center">
            <img src={logo2} alt="logo" />
          </div>
          <p className="inter font-light text-[24px] leading-[25px] tracking-[-0.5px] text-center w-[880px] m-auto">
            Lörem ipsum falig begåliga, prerar mispengar gil mytobel ägt.
            Anteninde etnopod, läpon eller selalig panar megt och prell
            tratosamma i vinde dogt: dussa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collabration;
