import React from "react";

const ProgrameFee = () => {
  return (
    <div className="w-full h-[500px]">
      <div className="w-full h-full px-24 py-24 text-center">
        <div className="flex flex-col gap-6 text-btnwhite">
          <p className="font-ppright font-medium text-[64px] leading-[67px] tracking-[-3px] text-center">
            Program Fees
          </p>
          <p className="inter font-normal text-[64px] leading-[75px] tracking-[-1px] text-center">
            INR 3,10,000*
          </p>
          <p className="inter font-normal text-[28px] leading-[29px] tracking-[-0.5px] text-center">
            *Including Campus Immersion Costs
          </p>
          <div className="w-200 h-auto">
            <a href="https://admission.futurense.com/" target="_blank">
              <button className="w-auto h-[40] rounded-[6px] px-[65px] py-3 bg-btnwhite mt-8 inter font-medium text-base text-center text-black inter relative btn_interaction">
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
