import React from "react";
import logo from "../Assects/logo.png";
import fb from "../Assects/fb.png";
import insta from "../Assects/insta.png";
import youtube from "../Assects/youtube.png";
import linkdine1 from "../Assects/linkdine1.png";

const FooterMob = () => {
  return (
    <div className="md:hidden w-full min-h-[222px] py-4 mt-2 ">
      <div className="px-10 flex w-full h-full items-center justify-between text-btnwhite gap-4">
        <div className="w-full flex flex-col gap-2 ">
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/about-us.php"> About Us</a>
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/partner-with-us.php">
              Partner with Us
            </a>
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/work-with-us.php"> Work with Us</a>
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Careers
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/contact.php"> Contact Us</a>
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            Blogs
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/terms-and-conditions.php">
              {" "}
              Terms and Conditions
            </a>
          </p>
          <p className="text-[12px] leading-[14px] inter font-medium tracking-[-0.025px]">
            <a href="https://futurense.com/privacy-policy.php">
              {" "}
              Privacy Policy
            </a>
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
              <a href="https://www.facebook.com/futurensetech">
                <img src={fb} alt="fb" />
              </a>
              <a href="https://www.instagram.com/futurensetech/">
                <img src={insta} alt="fb" />
              </a>
              <a href="https://www.youtube.com/channel/UCpIzW0SV6I5HLxrXgnTQzXg">
                <img src={youtube} alt="fb" />
              </a>
              <a href="https://www.linkedin.com/company/66648516/admin/">
                <img src={linkdine1} alt="fb" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMob;
