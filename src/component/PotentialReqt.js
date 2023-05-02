import React from "react";
import img1 from "../Assects/Accenture 1.png";
import img2 from "../Assects/amazon.png";
import img3 from "../Assects/ibm.png";
import img4 from "../Assects/samsung.png";
import img5 from "../Assects/other.png";
import img6 from "../Assects/intel.png";
import img7 from "../Assects/cisco.png";
import img8 from "../Assects/airbn.png";
import img9 from "../Assects/uber.png";
import img10 from "../Assects/apple.png";
import img11 from "../Assects/linkdine.png";
import img12 from "../Assects/google.png";

const PotentialReqt = () => {
  return (
    <div className="w-full min-h-[522px] bg-white">
      <div className="w-full h-full px-10 py-12 md:px-24 md:py-20">
        <div className="min-w-[280px] min-h-[151px]  md:w-[700px] md:h-[110px] text-center text-black mx-auto">
          <h4 className="text-[50px] leading-[52px] md:text-[72px] font-medium font-ppright tracking-[-4px] md:leading-[72px]">
            Potential Recuiters
          </h4>
          <p className="inter text-[16px] leading-[19px] font-medium md:text-[23px] md:font-normal md:leading-[25px] tracking-[-1.8px] ">
            World's leading companies are hiring for the most in-demand job
            roles!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PotentialReqt;
