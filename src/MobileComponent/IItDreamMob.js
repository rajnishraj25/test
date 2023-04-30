import React from "react";
import Suit from "../Assects/Suit.png";

const IItDreamMob = () => {
  return (
    <div className="md:hidden w-full min-h-[354px] text-center">
      <div className=" w-full h-full px-10 py-12">
        <h2 className="text-center text-btnwhite font-ppright text-[50px]  leading-[54px] tracking-[-1px]">
          The IIT Dream?
          <br />
          <span className="bg-yello text-black"> Not a dream </span> <br />
          anymore !
        </h2>
        <button className="min-w-[132px] px-6 rounded-[6px] py-2 bg-btnwhite text-black my-4">
          Download Brochure
        </button>
      </div>
      <div className="w-full min-h-[215px] py-4">
        <img src={Suit} alt="suit" className="w-full h-full" />
      </div>
    </div>
  );
};

export default IItDreamMob;
