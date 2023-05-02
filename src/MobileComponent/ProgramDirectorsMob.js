import React from "react";
import Slider from "react-slick";
const ProgramDirectorsMob = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="md:hidden w- full  min-h-[430px] h-full">
      <div className="w-full h-full px-10 py-6 text-btnwhite">
        <h2 className="font-ppright text-[36px] leading-[38px] font-medium text-left tracking-[-0.5px]">
          Program Directors
        </h2>
        <div className="w-full h-full overflow-hidden mt-4">
          <Slider {...settings}>
            <div className="min-w-[280px] w-full min-h-[315px] border-2 border-btnwhite rounded-[5px] p-4">
              <div className="flex items-center justify-between gap-4">
                <div className=" min-w-[90px]  min-h-[90px]  pic rounded-[8px] ">
                  {/* <img src={Pic} alt="" className="w-full h-full" /> */}
                </div>
                <div className="text-btnwhite">
                  <h3 className="font-ppright font-medium text-[18px] leading-[19px] tracking-[-0.5px]">
                    Dr. Dip Sankar Banerjee
                  </h3>
                  <p className="inter text-[12px] font-normal leading-[18.9px] tracking-[-0.025px]">
                    Assistant Professor <br /> Department of Computer Science
                    and Engineering Indian Institute of Technology, Jodhpur
                  </p>
                </div>
              </div>
              <div className="w-full h-0 border-2 border-yello mt-2"></div>
              <p className="inter text-[14px] font-normal leading-[16.9px] tracking-[-0.025] text-btnwhite mt-2">
                Dr. Dip Sankar Banerjee is an Assistant Professor at IIT Jodhpur
                since December 2020. He completed his PhD. in Computer Science
                and Engineering from the Indian Institute of Information
                Technology Hyderabad in 2014. He was a postdoc at the Ohio State
                University from 2015-2016. His research interests are broadly in
                the area of High Performance Computing, Computing Systems,
                Computer Architecture, and Data Analytics. 
              </p>
            </div>
            <div className="min-w-[280px] w-full min-h-[315px] border-2 border-btnwhite rounded-[5px] mr-1 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className=" min-w-[90px]  min-h-[90px]  pic1 rounded-[8px] ">
                  {/* <img src={Pic} alt="" className="w-full h-full" /> */}
                </div>
                <div className="text-btnwhite">
                  <h3 className="font-ppright font-medium text-[18px] leading-[19px] tracking-[-0.5px]">
                    Dr. Subhash Bhagat
                  </h3>
                  <p className="inter text-[12px] font-normal leading-[18.9px] tracking-[-0.025px]">
                    Assistant Professor <br /> Department of Mathematics Indian
                    Institute of Technology, Jodhpur
                  </p>
                </div>
              </div>
              <div className="w-full h-0 border-2 border-yello mt-2"></div>
              <p className="inter text-[14px] font-normal leading-[16.9px] tracking-[-0.025] text-btnwhite mt-2">
                Dr. Subhash is an Assistant Professor in the Department of
                Mathematics at IIT Jodhpur in Rajasthan, India. They received
                their PhD from the Advanced Computing and Microelectronics Unit
                at the Indian Statistical Institute in Kolkata. Their research
                interests are in the areas of distributed systems and
                algorithms, specifically focused on distributed algorithms for
                Swarm Robots and Autonomous Multi-Agent systems, Internet of
                Robotic Things (IoRT), autonomous mobile robotic sensors, and
                security in distributed computing. 
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProgramDirectorsMob;
