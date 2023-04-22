import React from "react";
import clock from "../Assects/clock 1.png";
import calender from "../Assects/calender.png";
import money from "../Assects/money.png";
import group from "../Assects/group.png";
import tick from "../Assects/tick.png";
import vector from "../Assects/Vector.png";

const ClockSection = () => {
  return (
    <div className="w-full h-[400px]">
      <div className="container px-24 text-btnwhite w-full h-full flex  items-center justify-center  ">
        <div className="grid grid-cols-3  w-full h-auto gap-10  ">
          <div className="flex  gap-4   items-start  w-full">
            <img src={clock} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Programme Duration
              </h3>
              <p className="inter text-[18px] font-normal">
                12 Months | 330 hours
              </p>
            </div>
          </div>
          <div className="flex  gap-4  items-start  w-full">
            <img src={calender} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Programme Commencement
              </h3>
              <p className="inter text-[18px] font-normal">01 August, 2023</p>
            </div>
          </div>
          <div className="flex gap-4  items-start  w-full">
            <img src={money} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Programme Fees
              </h3>
              <p className="inter text-[18px] font-normal">INR 3.10L</p>
            </div>
          </div>
          <div className="flex  gap-4 items-start  w-full e">
            <img src={group} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Eligibility
              </h3>
              <p className="inter text-[18px] font-normal">
                4 Years B.Tech, B.Sc or Master’s degree in Science, MCA or
                related field 1-2 Years of Industry Experience
              </p>
            </div>
          </div>
          <div className="flex gap-4  items-start  w-full">
            <img src={tick} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Programme Schedule
              </h3>
              <p className="inter text-[18px] font-normal">
                Saturdays and Sundays: 3 hour sessions each day Weekdays: 4 hour
                sessions by Industry Experts
              </p>
            </div>
          </div>
          <div className="flex  gap-4 items-start  w-[70%]">
            <img src={vector} alt="" />
            <div>
              <h3 className="font-ppright text-[28px] font-medium">
                Learning Mode
              </h3>
              <p className="inter text-[18px] font-normal">
                Live Online Sessions Campus Immersion of 30 days 10 days after
                each trimester
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSection;
