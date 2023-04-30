import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Counter = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="w-full min-h-[573px] h-full">
      <div className="w-full h-full px-10 md:px-24  py-24 ">
        <h3 className=" w-full text-[48px] leading-[52px] tracking-[-4px] text-btnwhite font-ppright md:text-[84px] md:line_height md:spacing md:my-0 font-medium md:px-4 text-center">
          Program
          <span className="bg-yello text-black pr-1 "> Highlights </span>
        </h3>
        <p className="hidden md:block inter text-[26px] font-normal tracking-[-2.5px] text-btnwhite mt-4 text-center">
          Top faculty from IIT Jodhpur, hands-on practical sessions,
          assignments, capstone projects and more!
        </p>

        <div className="gap-9 md:gap-0 mt-6 py-6 md:py-0 items-center flex flex-col md:flex-row md:items-start md:justify-between md:mt-24  ">
          <div className="w-[134px] h-auto text-center">
            <h2 className="text-[72px] leading-[76px] tracking-[-3px]  font-ppright md:text-[84px]  text-btnwhite font-medium md:tracking-tighter md:line_height">
              <CountUp end={35} enableScrollSpy />
            </h2>
            <p className="inter text-[16px] font-normal tracking-[-1px]  md:text-[24px] text-btnwhite md:font-light md:tracking-tighter">
              Total Credits
            </p>
          </div>
          <div className=" w-full md:w-[188px] h-auto text-center">
            <h2 className="text-[72px] leading-[76px] tracking-[-3px]  font-ppright md:text-[84px]  text-btnwhite font-medium md:tracking-tighter md:line_height md:inline-block">
              <CountUp end={300} enableScrollSpy />{" "}
              <span className="text-yello">+</span>
            </h2>
            <p className=" w-full inter text-[16px] font-normal tracking-[-0.3px] md:text-[24px] text-btnwhite md:font-light md:tracking-tighter">
              Hours of Live Online Sessions
            </p>
          </div>
          <div className="w-[188px] md:w-[140px] h-auto text-center  ">
            <h2 className="text-[72px] leading-[76px] tracking-[-3px]  font-ppright md:text-[84px]  text-btnwhite font-medium md:tracking-tighter md:line_height">
              <CountUp end={15} enableScrollSpy />
              <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[16px]  font-normal tracking-[-1px] md:text-[24px] text-btnwhite md:font-light md:tracking-tighter">
              Tools and Technologies
            </p>
          </div>
          <div className="w-[188px] h-auto text-center">
            <h2 className="text-[72px] leading-[76px] tracking-[-3px]  font-ppright md:text-[84px]  text-btnwhite font-medium md:tracking-tighter md:line_height">
              <CountUp end={500} enableScrollSpy />{" "}
              <span className="text-yello">+</span>
            </h2>
            <p className=" inter text-[16px]  font-normal tracking-[-1px] md:text-[24px] text-btnwhite md:font-light md:tracking-tighter">
              Self-Guided Learning Hours
            </p>
          </div>
          <div className="w-[134px] h-auto text-center">
            <h2 className="text-[72px] leading-[76px] tracking-[-3px]  font-ppright md:text-[84px]  text-btnwhite font-medium md:tracking-tighter md:line_height">
              <CountUp end={11} enableScrollSpy />{" "}
              <span className="text-yello">+</span>
            </h2>
            <p className="inter text-[16px]  font-normal tracking-[-1px] md:text-[24px] text-btnwhite md:font-light md:tracking-tighter">
              Electives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
