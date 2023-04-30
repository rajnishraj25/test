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
      <div className="w-full h-full px-24 py-20">
        <div className="w-[700px] h-[110px] text-center text-black mx-auto">
          <h4 className="text-[72px] font-medium font-ppright tracking-[-4px] leading-[72px]">
            Potential Recuiters
          </h4>
          <p className="inter text-[23px] font-normal leading-25 tracking-[-1.8px] ">
            World's leading companies are hiring for the most in-demand job
            roles!
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6">
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
