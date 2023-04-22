import React, { useState } from "react";

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
    <div className="w-full h-[700px]">
      <div className="container w-full px-28 h-full">
        <div className="text-center mt-15">
          <h3 className="text-[84px] line_height font-ppright font-medium  tracking-[-4px] text-btnwhite ">
            Life is a race, why not{" "}
            <span className="bg-yello text-black">stay ahead </span> in it?
          </h3>
          <button className="w-auto h-[40] rounded-[6px] px-[65px] py-3 bg-btnwhite mt-8 inter font-medium text-base">
            Apply Now
          </button>
        </div>
        <div className="flex items-center w-full h-full justify-between">
          <div className="w-[465px] h-[135px] text-btnwhite">
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
              className={`text-[62px] font-medium font-ppright leading-[60px] mt-6 tracking-tight  cursor-pointer ${
                text2 ? "text-btnwhite" : "text-[#6D6D6D]"
              }`}
              onClick={HandleClick1}
            >
              This is not for you,
              <br /> if you don’t have 
            </h2>
            {text2 && (
              <div className="w-[90%] h-0 border-2 border-yello mt-[-8px] ml-0"></div>
            )}
          </div>
          <div className="w-[690px] h-[310px] border-2 rounded-[6px] border-yello p-6 text-btnwhite text-[20px] inter leading-[25px] tracking-tighter">
            {text1 && (
              <div>
                {/* <p className="my-4">
                  Have a bachelor’s degree in engineering or science (4-year
                  program) or a master’s degree in science, MCA, or in a related
                  field.
                </p>
                <p className="my-4">
                  Have a minimum of 60% marks in UG/PG or a minimum CGPA of 6.0
                  on a scale of 10 with corresponding proportional requirements
                  when the scales are other than 10.
                </p>
                <p className="my-4">
                  Have a work expeirence of minimum 2 years (after qualifying
                  degree)
                </p>
                <p className="my-4">
                  Have a work expeirence of minimum 2 years (after qualifying
                  degree)
                </p>
                <p className="my-4">
                  Qualify for the written test conducted by Futurense Qualify
                  for the written test conducted by Futurense Have the zeel to
                  keep up with the ongoing trends in technology space
                </p> */}
                <p className="my-4">
                  You want a future-proof career after the unfolding of
                  Generative Artificial Intelligence.
                </p>
                <p className="my-4">
                  You are aspiring for a high growth career in Data Science and
                  Engineering, this program provides you with the right
                  knowledge, tools, prestigious IIT PG Diploma credential to
                  help you succeed.
                </p>
                <p className="my-4">
                  For aspiring and current software, and technology
                  professionals, this PG diploma program helps hone high in
                  demand skills such as big data engineering, cloud computing,
                  and machine learning.
                </p>
              </div>
            )}

            {text2 && (
              <div>
                <p className="my-0">
                  Have a bachelor’s degree in engineering or science (4-year
                  program) or a master’s degree in science, MCA, or in a related
                  field.
                </p>
                <p className="my-1">
                  Have a minimum of 60% marks in UG/PG or a minimum CGPA of 6.0
                  on a scale of 10 with corresponding proportional requirements
                  when the scales are other than 10.
                </p>
                <p className="my-2">
                  Have a work expeirence of minimum 2 years (after qualifying
                  degree)
                </p>
                <p className="my-2">
                  Have a work expeirence of minimum 2 years (after qualifying
                  degree)
                </p>
                <p className="my-1">
                  Qualify for the written test conducted by Futurense Qualify
                  for the written test conducted by Futurense Have the zeel to
                  keep up with the ongoing trends in technology space
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestToggle;
