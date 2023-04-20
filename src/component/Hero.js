import React from "react";
import logo from "../Assects/logo.png";
import iitlogo from "../Assects/iitlogo.png";

const Hero = () => {
  return (
    <div className="w-full h-[792px] bg_img">
      <div className="gredient w-full h-full relative z-10">
        <div className="gradient2 w-full h-full relative z-20">
          <div className="container px-24">
            <div className="flex items-center justify-between h-20">
              <img
                src={logo}
                alt="logo"
                className="w-[72px] h-14 cursor-pointer"
              />
              <button className="w-auto text-sm font-medium h-10 bg-btnwhite rounded-md cursor-pointer text-black px-[50px] py-2">
                Apply to Upskill
              </button>
            </div>
            <div className="w-[85px] h-14 mt-8">
              <img src={iitlogo} alt="logo" className="" />
            </div>
            <div className="flex items-center justify-between h-[500px] mt-8">
              <div className="w-[764px] h-[420px]">
                <h3 className="text-btnwhite font-ppright text-[84px] line_height">
                  PG Diploma in <br />{" "}
                  <span className="underline_1">Data Science</span> <br /> and
                  Engineering
                </h3>
                <div className="flex text-btnwhite mt-8 inter items-center gap-6 text-lg font-medium w-full  ">
                  <ul className="list-disc w-[40%]">
                    <li>IIT Alumni Status</li>
                    <li>
                      Developed by ex-MAANG experts and esteemed IIT professors
                    </li>
                  </ul>

                  <ul className="list-disc  w-[60%]">
                    <li>Hands on with ChatGPT and emerging technologies</li>
                    <li> Masterclasses by top Industry Experts</li>
                    <li> Futurense Bridge Course</li>
                  </ul>
                </div>
                <div className="flex gap-4 items-cente mt-8">
                  <button className="w-auto h-12 px-11 py-3 rounded-md bg-btnwhite ">
                    Become an IITian
                  </button>
                  <button className="w-auto h-12 px-11 py-3 rounded-md bg-black text-btnwhite border-2 border-btnwhite ">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="form border-2 border-btnwhite w-[400px] h-[480px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
