import React, { useState } from "react";
import TextToggleMob from "../MobileComponent/TextToggleMob";

const TestToggle = () => {
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);
  const HandleClick = () => {
    setText1(!text1);
    setText2(false);
  };

  const HandleClick1 = () => {
    setText2(!text2);
    setText1(false);
  };
  return (
    <>
      <div className="hidden md:block w-full min-h-[700px] ">
        <div className="w-full px-24 py-24 h-full">
          <div className="text-center mt-15">
            <h3 className="text-[82px] line_height font-ppright font-medium  tracking-[-5px] text-btnwhite ">
              <span className="line1">Life is a race, </span>
              why not <span className="bg-yello text-black">
                stay ahead{" "}
              </span>{" "}
              in it?
            </h3>
            <a href="https://admission.futurense.com/" target="_blank">
              <button className="w-auto h-[40] rounded-[6px] px-[65px] py-3 bg-btnwhite mt-8 inter font-medium text-base relative btn_interaction">
                Apply Now
              </button>
            </a>
          </div>
          <div className="flex items-center w-full h-full justify-between gap-8 mt-12">
            <div className="max-w-[465px] w-full h-[135px] text-btnwhite">
              <h2
                className={`text-[64px] font-medium font-ppright leading-[64px] tracking-tight p-2 cursor-pointer ${
                  text1 ? "text-btnwhite" : "text-[#6D6D6D]"
                }`}
                onClick={HandleClick}
              >
                This is for you, if
              </h2>
              {text1 && (
                <div className="w-[90%] h-0 border-2 border-yello mt-[-16px] ml-2"></div>
              )}

              <h2
                className={`text-[62px] font-medium font-ppright leading-[60px] mt-6 tracking-tight p-2  cursor-pointer ${
                  text2 ? "text-btnwhite" : "text-[#6D6D6D]"
                }`}
                onClick={HandleClick1}
              >
                This is not for you,
                <br /> if you don’t have 
              </h2>
              {text2 && (
                <div className="w-[90%] h-0 border-2 border-yello mt-[-12px] ml-0"></div>
              )}
            </div>
            <div className="max-w-[690px] w-full min-h-[330px] h-full border-2 rounded-[6px] border-yello p-6 text-btnwhite text-[20px] inter leading-[25px] tracking-tighter">
              {text1 && (
                <div>
                  <p className="my-2 border-l-2 border-yello pl-1">
                    you are aspiring for a high growth career in data field,
                    either in the data science, ML track or the engineering and
                    MLOps track and Engineering, this program will provide you
                    with the right knowledge, tools, technologies and a
                    prestigious IIT PG Diploma credential to accelerate your
                    career.
                  </p>
                  <p className="my-4 border-l-2 border-yello pl-1 mt-4">
                    you are an aspiring or a current software and technology
                    professional, this PG diploma program will help you hone
                    high in-demand skills such as big data engineering, cloud
                    computing, and machine learning.
                  </p>
                  <p className="my-4 border-l-2 border-yello pl-1"></p>
                </div>
              )}

              {text2 && (
                <div>
                  <p className="my-4 border-l-2 border-yello pl-1">
                    BTech in engineering, IT or science (4-year Program) or a
                    B.Sc or master’s degree in science, Math or Stats or
                    relevant field, or an MCA
                  </p>
                  <p className="my-4 border-l-2 border-yello pl-1">
                    A minimum of 60% marks in UG/PG or a minimum CGPA of 6.0 on
                    a scale of 10 with corresponding proportional requirements
                    when the scales are other than 10.
                  </p>
                  <p className="my-4 border-l-2 border-yello pl-1">
                    A working professional with a minimum of two years of work
                    experience (after qualifying degree) at the time of
                    registration to the Program. (The applicant must qualify the
                    pre-screen test conducted by Futurense)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <TextToggleMob />
    </>
  );
};

export default TestToggle;
