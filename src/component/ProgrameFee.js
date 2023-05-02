import React from "react";

const ProgrameFee = () => {
  return (
    <div className="w-full h-[310px]  md:h-[500px]">
      <div className="w-full h-full px-10 py-16 md:px-24 md:py-24 text-center">
        <div className="flex flex-col gap-6 text-btnwhite">
          <p className="font-ppright text-[36px] leading-[38px] tracking-[-0.25px] font-medium md:text-[64px] md:leading-[67px] md:tracking-[-3px] text-center">
            Program Fees
          </p>
          <p className="inter text-[32px] font-normal md:text-[64px] leading-[70px] md:leading-[75px] tracking-[-0.5px] md:tracking-[-1px] text-center">
            INR 3,10,000*
          </p>
          <p className="text-[16px] leading-[19px] inter font-normal md:text-[28px] md:leading-[29px] tracking-[-0.5px] text-center">
            *Including Campus Immersion Costs
          </p>
          <div className="w-200 h-auto">
            <a href="https://admission.futurense.com/" target="_blank">
              <button className="w-auto h-[40] rounded-[6px] px-[65px] py-3 bg-btnwhite md:mt-8 inter font-medium text-base text-center text-black inter relative btn_interaction">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrameFee;
