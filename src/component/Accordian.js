import React, { useState } from "react";

import arrow from "../Assects/arrow.png";

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
    <div className="w-full h-[560px]">
      <div className="container w-full h-full px-24 flex items-center justify-center">
        <div className=" flex items-center w-full justify-between">
          <div className="w-[524px] h-[281px] text-left text-btnwhite">
            <h2 className="text-[72px] font-ppright font-medium leading-[60px]  tracking-[-3px]">
              {" "}
              Programme Curriculum
            </h2>
            <p className="font-medium inter text-[18px] leading-[18.9px] tracking-tighter mt-6">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </p>
            <button className="w-auto h-12 px-11 py-3 rounded-md bg-black text-btnwhite border-2 border-btnwhite mt-6">
              Download Brochure
            </button>
          </div>
          {/* acordian */}
          <div className="w-[650px]">
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
                    <p className="trimes font-medium">Electives (Any 2)</p>
                    <ul>
                      <li className="trimes list-decimal pl-4">
                        Applied Mathematics and Statistics
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Programming Tools and Techniques for Data Science
                      </li>
                      <li className="trimes list-decimal pl-4">
                        Database Design and Modelling
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
                      Data Mining & Warehousing
                    </li>
                    <li className="trimes list-disc pl-4">Machine Learning</li>
                    <li className="trimes list-disc pl-4">
                      Distributed Systems and Platforms
                    </li>
                    <p className="trimes font-medium">Electives (Any 2)</p>
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
                      <li className="trime list-decimal pl-4s">
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

                    <p className="trimes font-medium">Electives (Any 2)</p>
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
        </div>
      </div>
    </div>
  );
};

export default Accordian;
