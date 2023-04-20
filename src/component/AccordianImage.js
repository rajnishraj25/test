import React, { useState } from "react";
import minus from "../Assects/minus.png";
import plus from "../Assects/plus.png";
import component1 from "../Assects/Component 3.png";
import component2 from "../Assects/Component 3.png";
import component3 from "../Assects/Component 4.png";
import component4 from "../Assects/Component 5.png";

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
    <div className="w-full h-[747px]">
      <div className="container w-full h-full px-24 py-24">
        <div className="flex gap-0 h-full justify-between items-center">
          <div>
            <h2 className="text-[60px] text-center text-btnwhite font-medium font-ppright leading-[72px] tracking-tighter ">
              The Highlights
            </h2>
            <div className="h-[380px] w-[380px] border">
              {isActive && <img src={component1} alt="" />}
              {isActive1 && <img src={component2} alt="" />}
              {isActive2 && <img src={component3} alt="" />}
              {isActive3 && <img src={component4} alt="" />}
            </div>
          </div>
          <div className="w-[750px] my-8">
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
                      Cutting-edge project-centric curriculum built by industry
                      experts and IIT-J Faculty after the emergence generative
                      AI{" "}
                    </li>
                    <li className="py-1">
                      Application-oriented approach along with case studies and
                      project work{" "}
                    </li>
                    <li className="py-1">
                      Transfer your credits towards Executive M. Tech Program by
                      IIT Jodhpur
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
                    Next-gen Curriculum for a future-proof career
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
                      Cutting-edge project-centric curriculum built by industry
                      experts and IIT-J Faculty after the emergence generative
                      AI{" "}
                    </li>
                    <li className="py-1">
                      Application-oriented approach along with case studies and
                      project work{" "}
                    </li>
                    <li className="py-1">
                      Transfer your credits towards Executive M. Tech Program by
                      IIT Jodhpur
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
                    Next-gen Curriculum for a future-proof career
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
                      Cutting-edge project-centric curriculum built by industry
                      experts and IIT-J Faculty after the emergence generative
                      AI{" "}
                    </li>
                    <li className="py-1">
                      Application-oriented approach along with case studies and
                      project work{" "}
                    </li>
                    <li className="py-1">
                      Transfer your credits towards Executive M. Tech Program by
                      IIT Jodhpur
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
                    Next-gen Curriculum for a future-proof career
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
                      Cutting-edge project-centric curriculum built by industry
                      experts and IIT-J Faculty after the emergence generative
                      AI{" "}
                    </li>
                    <li className="py-1">
                      Application-oriented approach along with case studies and
                      project work{" "}
                    </li>
                    <li className="py-1">
                      Transfer your credits towards Executive M. Tech Program by
                      IIT Jodhpur
                    </li>
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

export default AccordianImage;
