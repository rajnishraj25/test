import React from "react";
import MoreContentMob from "../MobileComponent/MoreContentMob";

const MoreContent = () => {
  return (
    <>
      <div className="hidden md:block w-full h-auto">
        <div className="w-full h-auto px-24 py-24 text-center">
          <h2 className="text-[73px] font-ppright text-btnwhite font-medium  tracking-[-5px] text-center ">
            Why be content when you can have more?
          </h2>
          <h2 className="font-ppright text-[62px] leading-[67px] tracking-[-3px] font-medium text-btnwhite mt-6 text-center">
            Executive M.Tech Degree in{" "}
            <span className="bg-yello text-black px-[2px]"> 1 year </span>
          </h2>
          <p className="inter text-[24px] leading-[25px] tracking-tighter font-light text-btnwhite mt-8 text-center">
            Opt for Executive M.Tech Degree from IIT-J, post completion of PG
            Diploma in Data Science & Engineering Program  For more information,
            write to xyz@abc.com
          </p>
        </div>
      </div>
      <MoreContentMob />
    </>
  );
};

export default MoreContent;
