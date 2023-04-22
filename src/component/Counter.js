import React from "react";

const Counter = () => {
  return (
    <div className="w-full h-[573px] ">
      <div className="container w-full h-full px-24  py-24 ">
        <h3 className="text-btnwhite font-ppright text-[84px] line_height spacing my-0 font-medium px-4 text-center">
          Program
          <span className="bg-yello text-black pr-1 "> Highlights </span>
        </h3>
        <p className="inter text-[28px] font-normal tracking-tighter text-btnwhite mt-2">
          Top faculty from IIT Jodhpur, hands-on practical sessions,
          assignments, capstone projects and more!
        </p>

        <div className="flex items-start justify-between mt-24">
          <div className="w-[134px] h-auto text-center">
            <h2 className="font-ppright text-[84px]  text-btnwhite font-medium tracking-tighter line_height">
              35
            </h2>
            <p className="inter text-[24px] text-btnwhite font-light tracking-tighter">
              Total Credits
            </p>
          </div>
          <div className="w-[188px] h-auto text-center">
            <h2 className="font-ppright text-[84px]  text-btnwhite font-medium tracking-tighter line_height inline-block">
              300 <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[24px] text-btnwhite font-light tracking-tighter">
              Hours of Live Online Sessions
            </p>
          </div>
          <div className="w-[134px] h-auto text-center">
            <h2 className="font-ppright text-[84px]  text-btnwhite font-medium tracking-tighter line_height">
              15 <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[24px] text-btnwhite font-light tracking-tighter">
              Tools and Technologies
            </p>
          </div>
          <div className="w-[188px] h-auto text-center">
            <h2 className="font-ppright text-[84px]  text-btnwhite font-medium tracking-tighter line_height">
              500 <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[24px] text-btnwhite font-light tracking-tighter">
              Self-Guided Learning Hours
            </p>
          </div>
          <div className="w-[134px] h-auto text-center">
            <h2 className="font-ppright text-[84px]  text-btnwhite font-medium tracking-tighter line_height">
              11 <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[24px] text-btnwhite font-light tracking-tighter">
              Electives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
