import React from "react";
import Burger from "../Assects/Burger.png";
import logo from "../Assects/logo.png";

const HeroMob = () => {
  return (
    <div className="w-full min-h-[800px] mob_bg_img relative mb-24 md:hidden  ">
      <div className="gredient_mob absolute w-full min-h-[800px]  h-full z-10">
        <div className="gredient_mob2 absolute w-full min-h-[800px] h-full z-20">
          <div className="px-10 min-h-[800px] w-full h-full">
            <div className=" w-full h-12 py-2 flex items-center justify-between my-2">
              <img src={logo} alt="logo" className="w-10 h-8" />
              <img src={Burger} alt="logo" className="w-6 h-3" />
            </div>
            <div className="w-full min-h-[559px]  mt-[130px] pr-4 ">
              <div className="min-w-[256px] w-full min-h-[211px] text-btnwhite font-ppright text-[50px] leading-[52px] tracking-tighter-[-5px] font-medium">
                <h3>PG Diploma in Data Science and Engineering</h3>
              </div>
              <div className="max-w-[280px] min-h-[244px]  flex flex-col gap-6  my-10 text-btnwhite inter text-base font-normal tracking-tighter">
                <p className="border-l-4 border-yello py-1 pl-2">
                  IIT Alumni Status
                </p>
                <p className="border-l-4 border-yello py-1 pl-2">
                  Developed by ex-MAANG experts and esteemed IIT professors
                </p>
                <p className="border-l-4 border-yello py-1 pl-2">
                  Hands on with ChatGPT and emerging technologies
                </p>
                <p className="border-l-4 border-yello py-1 pl-2">
                  Masterclasses by top Industry Experts
                </p>
                <p className="border-l-4 border-yello py-1 pl-2">
                  Futurense Bridge Course
                </p>
              </div>
              <div className="w-full flex gap-4">
                <button className="min-w-[132px] px-2 rounded-[6px] py-2 bg-btnwhite text-black">
                  Become an IITian
                </button>
                <button className="min-w-[132px] px-2 rounded-[6px] py-2 border-2 border-btnwhite text-btnwhite">
                  Become an IITian
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMob;
