import React from "react";
import clock from "../Assects/clock 1.png";
import calender from "../Assects/calender.png";
import money from "../Assects/money.png";
import group from "../Assects/group.png";
import tick from "../Assects/tick.png";
import vector from "../Assects/Vector.png";

const ClockSection = () => {
  return (
    <div className=" w-full min-h-[400px]">
      <div className="px-10 py-12 md:px-24 md:py-24 text-btnwhite w-full h-full flex  items-center justify-center  ">
        <div className="grid grid-cols-1 md:grid-cols-3  w-full h-auto gap-10  ">
          <div className="md:max-w-[350px] flex  gap-4   items-start  w-full">
            <img src={clock} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Programme Duration
              </h3>
              <p className="inter text-xs md:text-[18px] font-normal">
                12 Months | 330 hours
              </p>
            </div>
          </div>
          <div className="md:min-w-[360px] flex  gap-4  items-start  w-full">
            <img src={calender} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Programme Commencement
              </h3>
              <p className="inter text-xs md:text-[18px] font-normal">
                01 August, 2023
              </p>
            </div>
          </div>
          <div className="md:min-w-[350px] flex gap-4  items-start  w-full">
            <img src={money} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Programme Fees
              </h3>
              <p className="inter text-xs md:text-[18px] font-normal">
                INR 3.10L
              </p>
            </div>
          </div>
          <div className="md:min-w-[350px] flex  gap-4 items-start  w-full e">
            <img src={group} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Eligibility
              </h3>
              <p className="inter text-xs md:text-[18px] md:leading-[19px] tracking-[-0.5px] font-normal mt-1">
                4 Years B.Tech, B.Sc or Master’s degree in Science, MCA or
                related field2 Years of Industry Experience
              </p>
            </div>
          </div>
          <div className="md:min-w-[350px] flex gap-4  items-start  w-full">
            <img src={tick} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Programme Schedule
              </h3>
              <p className="inter text-xs md:text-[18px] md:leading-[19px] tracking-[-0.5px] font-normal mt-1">
                <span className="font-bold"> Saturdays and Sundays: </span> 3
                hour sessions each day <br />
                <span className="font-bold"> Weekdays:</span> 4 hour sessions by
                Industry Experts
              </p>
            </div>
          </div>
          <div className="md:min-w-[350px] flex  gap-4 items-start  w-full">
            <img src={vector} alt="" className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <h3 className="font-ppright text-2xl md:text-[28px] font-medium">
                Learning Mode
              </h3>
              <p className="inter text-xs md:text-[18px] md:leading-[19px] tracking-[-0.5px] font-normal mt-1">
                Live Online Sessions{" "}
                <span className="font-bold"> Campus Immersion </span> of 30 days
                 (10 days after each trimester) 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSection;
