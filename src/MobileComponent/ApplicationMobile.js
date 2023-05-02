import React from "react";

const ApplicationMobile = () => {
  return (
    <div className="md:hidden w-full min-h-[623px] h-full">
      <div className="w-full h-full  px-10 py-12 text-btnwhite">
        <div className="text-center">
          <h2 className="font-medium text-[36px] tracking-[-0.5px] leading-[37px]">
            Application Process
          </h2>
          <p className="inter text-[16px] leading-[18px] font-medium tracking-[-0.25px] mt-2">
            Begin your 12 month journey of building a future-proof career!
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center  text-center  mt-6">
          <h2 className="font-medium text-[24px] leading-[25px] font-ppright ">
            Apply
          </h2>

          <div className="flex flex-col gap-0 justify-center items-center  mt-4">
            <div className="w-[48px] h-0 border-2 border-yello rotate-90 items-center"></div>
            <div className="w-2 h-2 rounded-full bg-yello mt-4"></div>
          </div>
          <h2 className="font-medium text-[24px] leading-[25px] font-ppright ">
            Screening Test
          </h2>

          <div className="flex flex-col gap-0 justify-center items-center mt-4 ">
            <div className="w-[48px] h-0 border-2 border-yello rotate-90 items-center"></div>
            <div className="w-2 h-2 rounded-full bg-yello mt-4"></div>
          </div>
          <h2 className="font-medium text-[24px] leading-[25px] font-ppright ">
            Offer Letter
          </h2>

          <div className="flex flex-col gap-0 justify-center items-center mt-4 ">
            <div className="w-[48px] h-0 border-2 border-yello rotate-90 items-center"></div>
            <div className="w-2 h-2 rounded-full bg-yello mt-4"></div>
          </div>
          <h2 className="font-medium text-[24px] leading-[25px] font-ppright ">
            Futurense Bridge Course
          </h2>
          <div className="flex flex-col gap-0 justify-center items-center mt-4">
            <div className="w-[48px] h-0 border-2 border-yello rotate-90 items-center"></div>
            <div className="w-2 h-2 rounded-full bg-yello mt-4"></div>
          </div>
          <h2 className="font-medium text-[24px] leading-[25px] font-ppright ">
            Begin your <br /> IIT - J journey
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ApplicationMobile;
