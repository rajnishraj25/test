import React from "react";
import logo from "../Assects/logo.png";
import fb from "../Assects/fb.png";
import insta from "../Assects/insta.png";
import youtube from "../Assects/youtube.png";
import linkdine1 from "../Assects/linkdine1.png";

const FooterMob = () => {
  return (
    <div className="md:hidden w-full min-h-[222px] py-4 mt-2">
      <div className="px-10 flex w-full h-full items-center justify-between text-btnwhite ">
        <div className="w-full flex flex-col gap-2 ">
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            About Us
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Partner with Us
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Work with Us
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Careers
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Contact Us
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Blogs
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Terms and Conditions
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Privacy Policy
          </p>
        </div>
        <div className=" text-center">
          <div className="flex flex-col gap-2">
            <img src={logo} alt="logo" className="mx-auto" />
            <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
              2nd Floor, Mantri Avenue, 8th Block, Koramangala, Bengaluru,
              Karnataka
            </p>
            <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
              +91 987 654 3210
            </p>
            <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
              futurense@email.com
            </p>
            <div className="flex justify-center items-center gap-2">
              <img src={fb} alt="fb" />
              <img src={insta} alt="fb" />
              <img src={youtube} alt="fb" />
              <img src={linkdine1} alt="fb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMob;
