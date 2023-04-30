import React from "react";
import z1 from "../Assects/z1.png";
import z2 from "../Assects/z2.png";
import z3 from "../Assects/z3.png";
import z4 from "../Assects/z4.png";
import z5 from "../Assects/z5.png";
import z6 from "../Assects/z6.png";
const AutoScroll = () => {
  return (
    <div className="w-full min-h-[392px] bg-btnwhite">
      <div className="w-full h-[392px] px-24">
        <div className="w-[690px] h-[110px] text-center m-auto">
          <h3 className="text-[72px] font-ppright leading-[67px] text-black font-medium tracking-[-3px]-">
            Tools Covered
          </h3>
          <p className="inter text-[24px]  leading-[25px] tracking-[-1px] font-light mt-4">
            Get hands-on experience with emerging tools and technologies!
          </p>
        </div>
        {/* <div className="grid grid-cols-6 gap-6 mt-12">
          <img src={z1} alt="logo" />
          <img src={z2} alt="logo" />
          <img src={z3} alt="logo" />
          <img src={z4} alt="logo" />
          <img src={z5} alt="logo" />
          <img src={z6} alt="logo" />
        </div> */}
        <div className="sliding_logo ">
          <div className="slide_track">
            <div className="slide_item">
              <img src={z1} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z2} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z3} alt="logo" className="w-[190px]" />
            </div>

            <div className="slide_item">
              <img src={z4} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z5} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z6} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              <img src={z1} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z2} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z3} alt="logo" className="w-[190px]" />
            </div>

            <div className="slide_item">
              <img src={z4} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z5} alt="logo" className="w-[190px]" />
            </div>
            <div className="slide_item">
              {" "}
              <img src={z6} alt="logo" className="w-[190px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
