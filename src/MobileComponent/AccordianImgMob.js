import React, { useState } from "react";
import minus from "../Assects/minus.png";
import plus from "../Assects/plus.png";
// import futurense1 from "../Assects/futurense1.png";
// import futurense2 from "../Assects/futurense2.png";
// import futurense3 from "../Assects/futurense3.png";
// import futurense4 from "../Assects/futurense4.png";

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
        <h2 className="text-btnwhite">Not your typical PG Diploma Program! </h2>
        <li className="accordion-item mb-4">
          <div
            className={`accordion-toggle cursor-pointer ${
              isActive ? " border-2 border-yello" : " border-2 border-[#8A8A8A]"
            }  `}
            onClick={onHandleClickMob}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h3
                className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                  isActive ? "" : ""
                } p-2 pb-2`}
              >
                Next-gen Curriculum for a future-proof career
              </h3>

              {isActive ? "" : <img src={plus} alt="" className="h-4 w-4" />}
            </div>
            {isActive && (
              <div className="w-full min-h-[412px]  text-btnwhite p-4">
                <div className="w-full h-[192px] bg-red-100 rounded-[5px]"></div>
                <div className="accordion-content text-lg inter font-medium text-btnwhite  pl-4 pt-4">
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
                className={`text-[30px] font-ppright leading-[36px] tracking-normal font-medium  text-btnwhite ${
                  isActive ? " border-b-2 border-yello" : ""
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
              <div className="w-full min-h-[412px] border-2 border-yello text-btnwhite p-4">
                <h3>Next-gen Curriculum for a future-proof career</h3>
                <div className="w-full h-[192px] bg-red-100 rounded-[5px]"></div>
                <ul className="accordion-content text-lg inter font-medium text-btnwhite  pl-4 pt-4">
                  <li className="py-1 border-l-2 border-yello">
                    Cutting-edge project-centric curriculum built by industry
                    experts and IIT-J Faculty after the emergence generative AI{" "}
                  </li>
                  <li className="py-1 border-l-2 border-yello">
                    Application-oriented approach along with case studies and
                    project work{" "}
                  </li>
                  <li className="py-1 border-l-2 border-yello">
                    Transfer your credits towards Executive M. Tech Program by
                    IIT Jodhpur
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </div>
    </div>
  );
};

export default AccordianImgMob;
