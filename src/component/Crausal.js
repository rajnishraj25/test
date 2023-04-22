import React from "react";
// import slid from "../Assects/slide1";
// import slid1 from "../Assects/slide2";

const Crausal = () => {
  return (
    <div className="w-full h-[746px]">
      <div className="container w-full h-full px-24 py-20">
        <div className="text-center text-btnwhite">
          <h3 className="text-[72px] leading-[75px] tracking-[-4px] font-ppright font-medium">
            Industry Tether
          </h3>
          <p className="inter font-normal text-[29px] leading-[29px] tracking-[-2px] ">
            Get mentored by Industry Leaders and be a part of the community!
          </p>
        </div>
        <div className="h-[356px] grid grid-cols-2 gap-5 mt-16">
          <div className=" w-full h-full slide_img"></div>
          <div className=" w-full h-full slide_img1"></div>
        </div>
      </div>
    </div>
  );
};

export default Crausal;
