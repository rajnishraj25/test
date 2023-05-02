import React from "react";

const MoreContentMob = () => {
  return (
    <div className=" md:hidden w-full min-h-[540px]">
      <div className="w-full h-full px-10 py-16 text-center">
        <h2 className="w-full text-[50px] leading-[55px] font-ppright text-btnwhite font-medium  tracking-[-1px] text-center ">
          Why be <br /> content when you can <br />{" "}
          <span className="bg-yello px-1 text-black mt-1"> have more?</span>
        </h2>
        <h2 className="font-ppright text-[24px] leading-[25px] tracking-[-1px] font-medium text-btnwhite mt-6 text-center">
          Executive M.Tech Degree in <br />
          <span className="bg-yello text-black px-[2px]"> 1 year </span>
        </h2>
        <p className="inter text-[16px] leading-[19px] tracking-tighter font-light text-btnwhite mt-8 text-center">
          Opt for Executive M.Tech Degree from IIT-J, post completion of PG
          Diploma in Data Science & Engineering Program  For more information,
          write to xyz@abc.com
        </p>
      </div>
    </div>
  );
};

export default MoreContentMob;
