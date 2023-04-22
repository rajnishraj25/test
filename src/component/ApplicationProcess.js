import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="w-full h-[590px]">
      <div className="container w-full h-full px-24 py-20">
        <div className="text-center text-btnwhite">
          <h2 className="font-ppright text-[72px] leading-[75px] tracking-[-3px] font-medium">
            Application Process
          </h2>
          <p className="inter font-normal inter text-[28px] leading-[29px] tracking-[-3px] mt-2">
            Begin your 12 month journey of building a future-proof career!
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <div className="flex items-center justify-between px-6">
            <div className="w-[264px] h-[84px] border-2 border-yello rounded-[5px] flex items-center justify-center">
              <span className="font-ppright text-btnwhite text-[28px] leading-[28px] tracking-tighter text-center">
                Apply
              </span>
            </div>
            <div className="w-[264px] h-[84px] border-2 border-yello rounded-[5px] flex items-center justify-center">
              <span className="font-ppright text-btnwhite text-[28px] leading-[28px] tracking-tighter text-center">
                Offer Letter
              </span>
            </div>
            <div className="w-[264px] h-[84px] border-2 border-yello rounded-[5px] flex items-center justify-center">
              <span className="font-ppright text-btnwhite text-[28px] leading-[28px] tracking-tighter text-center px-4">
                Begin your IIT - J journey
              </span>
            </div>
          </div>
          {/* pointer */}
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-btnwhite"></div>
            <div className="w-[221px] h-0 border-2 border-btnwhite"></div>

            <div className="w-6 h-6 rounded-full bg-btnwhite"></div>
            <div className="w-[221px] h-0 border-2 border-btnwhite"></div>
            <div className="w-6 h-6 rounded-full bg-btnwhite"></div>
            <div className="w-[221px] h-0 border-2 border-btnwhite"></div>
            <div className="w-6 h-6 rounded-full bg-btnwhite"></div>
            <div className="w-[221px] h-0 border-2 border-btnwhite"></div>
            <div className="w-6 h-6 rounded-full bg-btnwhite"></div>
          </div>
          <div className="flex items-center justify-between px-72">
            <div className="w-[264px] h-[84px] border-2 border-yello rounded-[5px] flex items-center justify-center">
              <span className="font-ppright text-btnwhite text-[28px] leading-[28px] tracking-tighter text-center">
                Screening Test
              </span>
            </div>
            <div className="w-[264px] h-[84px] border-2 border-yello rounded-[5px] flex items-center justify-center">
              <span className="font-ppright text-btnwhite text-[28px] leading-[28px] tracking-tighter text-center px-4">
                Futurense Bridge Course
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
