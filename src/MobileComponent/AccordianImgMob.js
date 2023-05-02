import React, { useState } from "react";
import minus from "../Assects/minus.png";
import plus from "../Assects/plus.png";
import futurense1 from "../Assects/futurense1.png";
import futurense2 from "../Assects/futurense2.png";
import futurense3 from "../Assects/futurense3.png";
import iit from "../Assects/iit.png";
const AccordianImgMob = () => {
  // import FAQData from "../../Data/FAQData";

  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const onHandleClickMob = () => {
    setIsActive(!isActive);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  const onHandleClick1Mob = () => {
    setIsActive1(!isActive1);
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  const onHandleClick2Mob = () => {
    setIsActive2(!isActive2);
    setIsActive(false);
    setIsActive3(false);
    setIsActive1(false);
  };
  const onHandleClick3Mob = () => {
    setIsActive3(!isActive3);
    setIsActive(false);
    setIsActive2(false);
    setIsActive1(false);
  };

  return (
    <div className="md:hidden w-full min-h-[862px]">
      <div className="w-full h-full px-10 py-24">
        <h2 className="text-btnwhite text-[36px] leading-[38px] font-medium tracking-[-1px] mb-2">
          Not your typical PG Diploma Program! 
        </h2>
        <li className="accordion-item mb-4">
          <div
            className={`accordion-toggle cursor-pointer ${
              isActive ? " border-2 border-yello" : " border-2 border-[#8A8A8A]"
            }  `}
            onClick={onHandleClickMob}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h3
                className={`text-[24px] font-ppright leading-[26px] tracking-[-0.5px] font-medium  text-btnwhite ${
                  isActive ? "" : ""
                } p-2 pb-2`}
              >
                Next-gen Curriculum for a future-proof career
              </h3>

              {isActive ? "" : <img src={plus} alt="" className="h-4 w-4" />}
            </div>
            {isActive && (
              <div className="w-full min-h-[412px]  text-btnwhite p-4">
                <div className="w-full h-[192px]  rounded-[5px]">
                  <img src={futurense1} alt="image" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 accordion-content text-sm  inter font-medium text-btnwhite  pl-2 pt-4">
                  <p className=" border-l-2 border-yello pl-2">
                    Cutting-edge project-centric curriculum built by industry
                    experts and IIT-J Faculty after the emergence generative AI{" "}
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Application-oriented approach along with case studies and
                    project work{" "}
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Transfer your credits towards Executive M. Tech Program by
                    IIT Jodhpur
                  </p>
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="accordion-item mb-4">
          <div
            className={`accordion-toggle cursor-pointer ${
              isActive1
                ? " border-2 border-yello"
                : " border-2 border-[#8A8A8A]"
            }  `}
            onClick={onHandleClick1Mob}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h3
                className={`text-[24px] font-ppright leading-[26px] tracking-[-0.5px] font-medium  text-btnwhite ${
                  isActive1 ? "" : ""
                } p-2 pb-2`}
              >
                The IIT Dream
              </h3>

              {isActive1 ? "" : <img src={plus} alt="" className="h-4 w-4" />}
            </div>
            {isActive1 && (
              <div className="w-full min-h-[412px]  text-btnwhite p-4">
                <div className="w-full h-[192px] rounded-[5px]">
                  <img src={iit} alt="image" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 accordion-content text-sm  inter font-medium text-btnwhite  pl-2 pt-4">
                  <p className=" border-l-2 border-yello pl-2">
                    Attain PG Diploma Certificate by IIT Jodhpur
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Achieve IIT Jodhpur Alumni Status{" "}
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Become a part of IIT-J Alumni network
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Network with experts from Data & Analytics industry 
                  </p>
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="accordion-item mb-4">
          <div
            className={`accordion-toggle cursor-pointer ${
              isActive2
                ? " border-2 border-yello"
                : " border-2 border-[#8A8A8A]"
            }  `}
            onClick={onHandleClick2Mob}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h3
                className={`text-[24px] leading-[26px] tracking-[-0.5px] font-ppright  font-medium  text-btnwhite ${
                  isActive2 ? "" : ""
                } p-2 pb-2`}
              >
                Hybrid Learning
              </h3>

              {isActive2 ? "" : <img src={plus} alt="" className="h-4 w-4" />}
            </div>
            {isActive2 && (
              <div className="w-full min-h-[412px]  text-btnwhite p-4">
                <div className="w-full h-[192px]  rounded-[5px]">
                  <img src={futurense2} alt="image" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 accordion-content text-sm inter font-medium text-btnwhite  pl-4 pt-4">
                  <p className=" border-l-2 border-yello pl-2">
                    Live sessions on emerging tools & technologies like ChatGPT
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Big Data, Cloud Computing & more
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Live Online Masterclasses by top industry experts
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    30 days campus immersion 10 days after each trimester
                  </p>
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="accordion-item mb-4">
          <div
            className={`accordion-toggle cursor-pointer ${
              isActive3
                ? " border-2 border-yello"
                : " border-2 border-[#8A8A8A]"
            }  `}
            onClick={onHandleClick3Mob}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h3
                className={`text-[24px] leading-[26px] tracking-[-0.5px] font-ppright  font-medium  text-btnwhite ${
                  isActive3 ? "" : ""
                } p-2 pb-2`}
              >
                Industry-tether with Futurense
              </h3>

              {isActive3 ? "" : <img src={plus} alt="" className="h-4 w-4" />}
            </div>
            {isActive3 && (
              <div className="w-full min-h-[412px]  text-btnwhite p-4">
                <div className="w-full h-[192px]  rounded-[5px]">
                  <img src={futurense3} alt="img" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 accordion-content text-sm inter font-medium text-btnwhite  pl-4 pt-4">
                  <p className=" border-l-2 border-yello pl-2">
                    Fully Sponsored Futurense Bridge Course covering the
                    foundations of the program
                  </p>
                  <p className=" border-l-2 border-yello pl-2">
                    Futurense Job Assistance
                  </p>
                </div>
              </div>
            )}
          </div>
        </li>
      </div>
    </div>
  );
};

export default AccordianImgMob;
