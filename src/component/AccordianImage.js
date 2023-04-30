import React, { useState } from "react";
import minus from "../Assects/minus.png";
import plus from "../Assects/plus.png";
import futurense1 from "../Assects/futurense1.png";
import futurense2 from "../Assects/futurense2.png";
import futurense3 from "../Assects/futurense3.png";
// import futurense4 from "../Assects/futurense4.png";
import AccordianImgMob from "../MobileComponent/AccordianImgMob";
import iit from "../Assects/iit.png";

// import FAQData from "../../Data/FAQData";

const AccordianImage = () => {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const onHandleClick = () => {
    setIsActive(!isActive);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  const onHandleClick1 = () => {
    setIsActive1(!isActive1);
    setIsActive(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  const onHandleClick2 = () => {
    setIsActive2(!isActive2);
    setIsActive(false);
    setIsActive3(false);
    setIsActive1(false);
  };
  const onHandleClick3 = () => {
    setIsActive3(!isActive3);
    setIsActive(false);
    setIsActive2(false);
    setIsActive1(false);
  };
  return (
    <>
      <div className="hidden md:block w-full min-h-[747px] h-full">
        <div className="w-full h-full px-24 py-24">
          <div className="flex gap-20 h-full justify-between items-center">
            <div className="max-w-[400px] w-full">
              <h2 className="text-[56px] text-left text-btnwhite font-medium font-ppright leading-[56px] tracking-[-2px] pb-2 ">
                Not your typical PG <br /> Diploma Program! 
              </h2>
              <div className="max-h-[380px] max-w-[380px] w-full border">
                {isActive && (
                  <img src={futurense1} alt="img" className="w-full h-full" />
                )}
                {isActive1 && (
                  <img src={iit} alt="img" className="w-full h-full" />
                )}
                {isActive2 && (
                  <img src={futurense2} alt="img" className="w-full h-full" />
                )}
                {isActive3 && (
                  <img src={futurense3} alt="img" className="w-full h-full" />
                )}
              </div>
            </div>
            <div className="max-w-[750px] w-full my-8">
              <li className="accordion-item mb-4">
                <div
                  className={`accordion-toggle cursor-pointer ${
                    isActive
                      ? " border-2 border-yello"
                      : " border-2 border-[#8A8A8A]"
                  }  `}
                  onClick={onHandleClick}
                >
                  <div className="flex justify-between items-center gap-2 ">
                    <h3
                      className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                        isActive ? " border-b-2 border-yello" : ""
                      } p-2 pb-2`}
                    >
                      Next-gen Curriculum for a future-proof career
                    </h3>

                    {isActive ? (
                      <img src={minus} alt="" className="h-1 w-6 text-yello" />
                    ) : (
                      <img src={plus} alt="" className="h-4 w-4" />
                    )}
                  </div>
                  {isActive && (
                    <ul className="accordion-content text-lg inter font-medium text-btnwhite list-disc pl-4 pt-4">
                      <li className="py-1">
                        Cutting-edge project-centric curriculum built by
                        industry experts and IIT-J Faculty after the emergence
                        generative AI{" "}
                      </li>
                      <li className="py-1">
                        Application-oriented approach along with case studies
                        and project work{" "}
                      </li>
                      <li className="py-1">
                        Transfer your credits towards Executive M. Tech Program
                        by IIT Jodhpur
                      </li>
                    </ul>
                  )}
                  {/* {isActive && (
                  <div className="accordion-content text-sm">{"content"}</div>
                  )}
                  {isActive && (
                    <div className="accordion-content text-sm">{"content"}</div>
                  )} */}
                </div>
              </li>
              <li className="accordion-item mb-4">
                <div
                  className={`accordion-toggle cursor-pointer ${
                    isActive1
                      ? " border-2 border-yello"
                      : " border-2 border-[#8A8A8A]"
                  }  `}
                  onClick={onHandleClick1}
                >
                  <div className="flex justify-between items-center gap-2 ">
                    <h3
                      className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                        isActive1 ? " border-b-2 border-yello" : ""
                      } p-2 pb-2`}
                    >
                      The IIT Dream 
                    </h3>

                    {isActive1 ? (
                      <img src={minus} alt="" className="h-1 w-6 text-yello" />
                    ) : (
                      <img src={plus} alt="" className="h-4 w-4" />
                    )}
                  </div>
                  {isActive1 && (
                    <ul className="accordion-content text-lg inter font-medium text-btnwhite list-disc pl-4 pt-4">
                      <li className="py-1">
                        Attain PG Diploma Certificate by IIT Jodhpur{" "}
                      </li>
                      <li className="py-1">
                        Achieve IIT Jodhpur Alumni Status{" "}
                      </li>
                      <li className="py-1">
                        Become a part of IIT-J Alumni network
                      </li>
                      <li className="py-1">
                        Network with experts from Data & Analytics industry 
                      </li>
                    </ul>
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
                  onClick={onHandleClick2}
                >
                  <div className="flex justify-between items-center gap-2 ">
                    <h3
                      className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                        isActive2 ? " border-b-2 border-yello" : ""
                      } p-2 pb-2`}
                    >
                      Hybrid Learning 
                    </h3>

                    {isActive2 ? (
                      <img src={minus} alt="" className="h-1 w-6 text-yello" />
                    ) : (
                      <img src={plus} alt="" className="h-4 w-4" />
                    )}
                  </div>
                  {isActive2 && (
                    <ul className="accordion-content text-lg inter font-medium text-btnwhite list-disc pl-4 pt-4">
                      <li className="py-1">
                        Live sessions on emerging tools & technologies like
                        ChatGPT, Big Data, Cloud Computing & more {" "}
                      </li>
                      <li className="py-1">
                        Live Online Masterclasses by top industry experts {" "}
                      </li>
                      <li className="py-1">
                        30 days campus immersion (10 days after each trimester) 
                      </li>
                    </ul>
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
                  onClick={onHandleClick3}
                >
                  <div className="flex justify-between items-center gap-2 ">
                    <h3
                      className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                        isActive3 ? " border-b-2 border-yello" : ""
                      } p-2 pb-2`}
                    >
                      Industry-tether with Futurense 
                    </h3>
                    {isActive3 ? (
                      <img src={minus} alt="" className="h-1 w-6 text-yello" />
                    ) : (
                      <img src={plus} alt="" className="h-4 w-4" />
                    )}
                  </div>
                  {isActive3 && (
                    <ul className="accordion-content text-lg inter font-medium text-btnwhite list-disc pl-4 pt-4">
                      <li className="py-1">
                        Fully Sponsored Futurense Bridge Course covering the
                        foundations of the program  Futurense Job Assistance {" "}
                      </li>
                      {/* <li className="py-1">
                      Application-oriented approach along with case studies and
                      project work{" "}
                      </li>
                      <li className="py-1">
                      Transfer your credits towards Executive M. Tech Program by
                      IIT Jodhpur
                    </li> */}
                    </ul>
                  )}
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <AccordianImgMob />
    </>
  );
};

export default AccordianImage;
