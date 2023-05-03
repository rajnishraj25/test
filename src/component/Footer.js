import React from "react";
import logo from "../Assects/logo.png";
import fb from "../Assects/fb.png";
import insta from "../Assects/insta.png";
import linkdine1 from "../Assects/linkdine1.png";

import youtube from "../Assects/youtube.png";
import { Link } from "react-router-dom";
import FooterMob from "../MobileComponent/FooterMob";

const Footer = () => {
  return (
    <>
      <div className="hidden md:block w-full h-[224px] mt-4">
        <div className="w-full h-full px-24 ">
          <div className="flex w-full items-end h-[82px] justify-between">
            <div className="text-btnwhite">
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/about-us.php"> About Us</a>
              </p>
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/contact.php"> Contact Us</a>
              </p>
            </div>
            <div className="text-btnwhite">
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/partner-with-us.php">
                  Partner with Us
                </a>
              </p>
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/work-with-us.php">
                  {" "}
                  Work with Us
                </a>
              </p>
            </div>
            <div className="text-btnwhite">
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                Careers
              </p>
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://blog.futurense.com/"> Blogs</a>
              </p>
            </div>
            <div className="text-btnwhite">
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/terms-and-conditions.php">
                  {" "}
                  Terms and Conditions
                </a>
              </p>
              <p className="inter font-normal text-[14px] leading-[16px] tracking-tighter cursor-pointer">
                <a href="https://futurense.com/privacy-policy.php">
                  {" "}
                  Privacy Policy
                </a>
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
            <a href="https://www.instagram.com/futurensetech/">
              <img src={insta} alt="logo" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/channel/UCpIzW0SV6I5HLxrXgnTQzXg">
              <img src={youtube} alt="logo" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/66648516/admin/">
              <img src={linkdine1} alt="logo" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/futurensetech">
              <img src={fb} alt="logo" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[8px] text-center leading-[9px] tracking-tighter inter text-btnwhite mt-8">
            All rights reserved © 2023, Futurense
          </p>
        </div>
      </div>
      <FooterMob />
    </>
  );
};

export default Footer;
