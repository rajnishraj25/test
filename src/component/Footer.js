import React from "react";
import logo from "../Assects/logo.png";
import fb from "../Assects/fb.png";
import insta from "../Assects/insta.png";
import linkdine1 from "../Assects/linkdine1.png";
import twitter from "../Assects/twitter.png";
import gmail from "../Assects/gmail.png";

const Footer = () => {
  return (
    <div className="w-full h-[224px] mt-4">
      <div className="container w-full h-full px-24 ">
        <div className="flex w-full items-end h-[82px] justify-between">
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              About Us
            </p>
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Partner with Us
            </p>
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Work with Us
            </p>
          </div>
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Careers
            </p>
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Blogs
            </p>
          </div>
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Terms and Conditions
            </p>
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              +91 987 654 3210
            </p>
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              futurense@email.com
            </p>
          </div>
          <div className="text-btnwhite">
            <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
              2nd Floor, Mantri Avenue, <br />
              8th Block, Koramangala, <br />
              Bengaluru, Karnataka
            </p>
          </div>
          <div className="text-btnwhite">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex h-[30px] items-center justify-center gap-6 mt-8">
          <img src={insta} alt="logo" className="w-6 h-6" />
          <img src={gmail} alt="logo" className="w-6 h-6" />
          <img src={fb} alt="logo" className="w-6 h-6" />
          <img src={linkdine1} alt="logo" className="w-6 h-6" />
          <img src={twitter} alt="logo" className="w-6 h-6" />
        </div>
        <p className="text-[8px] text-center leading-[9px] tracking-tighter inter text-btnwhite mt-8">
          All rights reserved © 2023, Futurense
        </p>
      </div>
    </div>
  );
};

export default Footer;
