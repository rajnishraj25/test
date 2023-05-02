import React, { useState } from "react";

import arrow from "../Assects/arrow.png";
import Brochure from "../Assects/Brochure.pdf";

const Accordian = () => {
  const [Active1, setActive1] = useState(false);
  const [Active2, setActive2] = useState(false);
  const [Active3, setActive3] = useState(false);
  const handleclick1 = () => {
    setActive1(!Active1);
    setActive2(false);
    setActive3(false);
  };
  const handleclick2 = () => {
    setActive2(!Active2);
    setActive1(false);
    setActive3(false);
  };
  const handleclick3 = () => {
    setActive3(!Active3);
    setActive2(false);
    setActive1(false);
  };

  return (
    <div className=" w-full h-[591px]  md:h-[560px]">
      <div className="w-full h-full px-10 py-16 md:py-0 md:px-24 flex items-center justify-center">
        <div className=" flex flex-col md:flex-row items-center w-full justify-between gap-10">
          <div className="w-full md:w-[524px] md:h-[281px] text-left text-btnwhite">
            <h2 className="text-[36px] leading-[37px] tracking-[-1px] md:text-[72px] font-ppright font-medium md:leading-[60px]  md:tracking-[-3px]">
              {" "}
              Programme <br /> Curriculum
            </h2>
            <p className="text-[14px] leading-[16px] font-medium inter md:text-[18px] md:leading-[19.9px] md:tracking-[-0.25px] tracking-[-0.025px] mt-2">
              Finely curated by esteemed IIT Jodhpur Faculty and ex-MAANG
              experts - the curriculum binds the areas with hands-on practical
              sessions, real life case studies, assignments, which shall help
              become a successful tech-leader in the global industry!
            </p>
            <a href={Brochure} download className=" hidden md:block">
              <button className="hidden md:block w-auto h-12 px-11 py-3 rounded-md bg-black text-btnwhite border-2 border-btnwhite mt-6 relative btn_interaction_black hover:text-black focus:text-black">
                Download Brochure
              </button>
            </a>
          </div>
          {/* acordian */}
          <div className=" w-full md:w-[650px]">
            <li className="accordion-item mb-4">
              <div
                className="accordion-toggle cursor-pointer border-b border-t border-yello "
                onClick={handleclick1}
              >
                <div className="flex justify-between items-center gap-2 ">
                  <h3
                    className={`"text-[18px] leading-[19px] tracking-tighter font-bold inter py-[10px] text-btnwhite  ${
                      Active1 && "border-b-2 border-btnwhite pb-1"
                    } `}
                  >
                    Trimester-I
                  </h3>
                  <img
                    src={arrow}
                    className={`${Active1 ? "rotate-180" : ""}  `}
                    alt="img"
                  />
                </div>
                {Active1 && (
                  <ul className="accordion-content text-sm text-btnwhite">
                    <li className="trimes list-disc pl-4">
                      Applied Mathematics and Statistics
                    </li>
                    <li className="trimes list-disc pl-4">
                      Programming Tools and Techniques for Data Science
                    </li>
                    <li className="trimes list-disc pl-4">
                      Database Design and Modelling
                    </li>
                    <li className="trimes font-medium list-disc">
                      Electives (Any 2)
                    </li>
                    <ul>
                      <li className="trimes list-decimal pl-4">
                        Fundamentals of Business and Data Analytics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Fundamentals of Data Science
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Data Visualization and Dashboards
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Cloud Fundamentals
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Data Mining & Warehousing
                      </li>
                    </ul>
                  </ul>
                )}
              </div>
            </li>
            <li className="accordion-item mb-4">
              <div
                className="accordion-toggle cursor-pointer border-b border-t border-yello "
                onClick={handleclick2}
              >
                <div className="flex justify-between items-center gap-2 ">
                  <h3
                    className={`"text-[18px] leading-[19px] tracking-tighter font-bold inter py-[10px] text-btnwhite  ${
                      Active2 && "border-b-2 border-btnwhite pb-1"
                    } `}
                  >
                    Trimester-II
                  </h3>
                  <img
                    src={arrow}
                    className={`${Active2 ? "rotate-180" : ""}  `}
                    alt="img"
                  />
                </div>

                {Active2 && (
                  <ul className="accordion-content text-sm text-btnwhite">
                    <li className="trimes list-disc pl-4 ">
                      Machine Learning 
                    </li>
                    <li className="trimes list-disc pl-4">
                      Distributed Systems and Platforms
                    </li>
                    <li className="trimes list-disc pl-4">
                      Web and Social Network Analytics
                    </li>
                    <li className="trimes font-medium list-disc">
                      Electives (Any 2)
                    </li>
                    <ul>
                      <li className="trimes list-decimal pl-4">
                        Digital Marketing Analytics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Financial Analytics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Retail Analytics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        People Analytics
                      </li>
                    </ul>
                  </ul>
                )}
              </div>
            </li>
            <li className="accordion-item mb-4">
              <div
                className="accordion-toggle cursor-pointer border-b border-t border-yello "
                onClick={handleclick3}
              >
                <div className="flex justify-between items-center gap-2 ">
                  <h3
                    className={`"text-[18px] leading-[19px] tracking-tighter font-bold inter py-[10px] text-btnwhite  ${
                      Active3 && "border-b-2 border-btnwhite pb-1"
                    } `}
                  >
                    Trimester-III
                  </h3>
                  <img
                    src={arrow}
                    className={`${Active3 ? "rotate-180" : ""}  `}
                    alt="img"
                  />
                </div>
                {Active3 && (
                  <ul className="accordion-content text-sm text-btnwhite">
                    <li className="trimes list-disc pl-4">
                      Big Data: Storage, Processing and Management
                    </li>
                    <li className="trimes list-disc pl-4">
                      Advanced Data Engineering with Cloud
                    </li>

                    <li className="trimes font-medium list-disc">
                      Electives (Any 2)
                    </li>
                    <ul>
                      <li className="trimes list-decimal pl-4">
                        Stream Processing and Analytics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Deploying Data Solutions - MLOps
                      </li>
                    </ul>
                  </ul>
                )}
              </div>
            </li>
          </div>
          <a href={Brochure} download className="  md:hidden">
            <button className=" md:hidden w-auto h-12 px-11 py-3 rounded-[6px]  bg-btnwhite text-black  mt-4  ">
              Download Brochure
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
