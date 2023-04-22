import React from "react";
import Pic from "../Assects/Pic.png";

const Testimonial = () => {
  return (
    <div className="w-full h-[634px]">
      <div className="containe w-full h-full px-24">
        <div className="w-[800px] h-[106px] text-center m-auto text-btnwhite">
          <h2 className="font-ppright font-medium text-[72px] leading-[68px] tracking-[-4px]">
            Program Directors
          </h2>
          <p className="inter font-normal text-[28px] leading-[29px] tracking-[-2px] mt-2">
            Specially curated and developed by IIT J Faculty and Industry
            Experts
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 px-10">
          <div className="w-[600px] h-[324px] border-2 border-btnwhite rounded-[5px] p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="w-[160px] h-[116px] pic rounded-[5px]">
                {/* <img src={Pic} alt="" className="w-full h-full" /> */}
              </div>
              <div className="text-btnwhite">
                <h3 className="font-ppright font-normal text-[40px] leading-[50px] tracking-[-3px]">
                  Dr. Dip Sankar Banerjee
                </h3>
                <p className="inter text-[18px] font-light leading-[18.9px] tracking-[-1px]">
                  Assistant Professor <br /> Department of Computer Science and
                  Engineering Indian Institute of Technology, Jodhpur
                </p>
              </div>
            </div>
            <div className="w-full h-0 border-2 border-yello mt-2"></div>
            <p className="inter text-[18px] font-light leading-[19.9px] tracking-tighter text-btnwhite mt-2">
              Dr. Dip Sankar Banerjee is an Assistant Professor at IIT Jodhpur
              since December 2020. He completed his PhD. in Computer Science and
              Engineering from the Indian Institute of Information Technology
              Hyderabad in 2014. He was a postdoc at the Ohio State University
              from 2015-2016. His research interests are broadly in the area of
              High Performance Computing, Computing Systems, Computer
              Architecture, and Data Analytics. 
            </p>
          </div>
          <div className="w-[600px] h-[324px] border-2 border-btnwhite rounded-[5px] p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="w-[160px] h-[116px] pic rounded-[5px]">
                {/* <img src={Pic} alt="" className="w-full h-full" /> */}
              </div>
              <div className="text-btnwhite">
                <h3 className="font-ppright font-normal text-[40px] leading-[50px] tracking-[-3px]">
                  Dr. Subhash Bhagat
                </h3>
                <p className="inter text-[18px] font-light leading-[18.9px] tracking-[-1px]">
                  Assistant Professor <br /> Department of Mathematics Indian
                  Institute of Technology, Jodhpur
                </p>
              </div>
            </div>
            <div className="w-full h-0 border-2 border-yello mt-2"></div>
            <p className="inter text-[18px] font-light leading-[19.9px] tracking-tighter text-btnwhite mt-2">
              Dr. Subhash is an Assistant Professor in the Department of
              Mathematics at IIT Jodhpur in Rajasthan, India. They received
              their PhD from the Advanced Computing and Microelectronics Unit at
              the Indian Statistical Institute in Kolkata. Their research
              interests are in the areas of distributed systems and algorithms,
              specifically focused on distributed algorithms for Swarm Robots
              and Autonomous Multi-Agent systems, Internet of Robotic Things
              (IoRT), autonomous mobile robotic sensors, and security in
              distributed computing. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
