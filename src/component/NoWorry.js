import React from "react";
import NoWorryMob from "../MobileComponent/NoWorryMob";

const NoWorry = () => {
  return (
    <>
      <div className="hidden md:block w-full min-h-[716px] bg-btnwhite">
        <div className="w-full h-full px-24 py-[128px]">
          <h3 className="text-center text-black font-ppright text-[82px] font-medium leading-[82px] tracking-[-4px]">
            Don't think you’re fit for an IIT? <br /> Worry no more!
          </h3>
          <p className="inter text-black font-medium text-[28px] leading-[29px] tracking-[-2px] mt-6 text-center">
            Upgrade your foundational skills with{" "}
            <span className="bg-yello"> Futurense Bridge Course </span> without
            any additional cost.
          </p>
          <p className="text-center font-medium font-ppright text-[36px] leading-[37px] tracking-[-0.25px] mt-10">
            36+ hours of live online training and self-guided learning in
          </p>
          <div className="flex items-center justify-center mt-8 px-32 w-full">
            <div>
              <div className="w-5 h-5 rounded-full bg-yello"></div>
            </div>
            <div className="w-full h-[2px] bg-yello"></div>
            <div>
              <div className="w-6 h-6 rounded-full bg-yello"></div>
            </div>
            <div className="w-full h-[2px] bg-yello"></div>
            <div>
              <div className="w-6 h-6 rounded-full bg-yello"></div>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 mt-2 ">
            <p className="inter text-[28px] font-medium text-black tracking[-2px] leading-[29px] text-center">
              Applied Math and Stats
            </p>
            <p className="inter text-[28px] font-medium text-black tracking-[-2px] leading-[29px] text-center">
              Problem Solving Using Python
            </p>
            <p className="inter text-[28px] font-medium text-black tracking-[-2px] leading-[29px] text-center">
              Project Management
            </p>
          </div>

          <p className="text-center mt-4 font-normal text-[22px] tracking-[-2px]">
            And more !
          </p>
        </div>
      </div>
      <NoWorryMob />
    </>
  );
};

export default NoWorry;
