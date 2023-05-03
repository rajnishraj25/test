import React from "react";
import Brochure from "../Assects/Brochure.pdf";
import Suit1 from "../Assects/Suit.png";
import IItDreamMob from "../MobileComponent/IItDreamMob";

const IItDream = () => {
  return (
    <>
      <div className="hidden md:block w-full min-h-[400px] py-24">
        <div className="w-full h-full px-24 text-center flex items-center justify-center ">
          <div className="w-full">
            <h3 className="font-ppright text-btnwhite text-[82px] line_height tracking-[-5px]">
              The IIT Dream?
              <span className="bg-yello text-black">Not a dream </span> anymore!
            </h3>
            <a href={Brochure} download>
              <button className="w-auto h-[40] rounded-[6px] px-[65px] py-3 bg-btnwhite mt-10 inter font-medium text-base relative btn_interaction">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
        <div className="w-full min-h-[800px] mt-4 ">
          <img src={Suit1} alt="person" className="w-full h-full" />
        </div>
      </div>
      <IItDreamMob />
    </>
  );
};

export default IItDream;
