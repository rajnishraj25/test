import React from "react";
import logo from "../Assects/logo.png";
import fb from "../Assects/fb.png";
import insta from "../Assects/insta.png";
import youtube from "../Assects/youtube.png";
import linkdine1 from "../Assects/linkdine1.png";

const FooterMob = () => {
  return (
    <div className="w-full min-h-[222px]  border-2  py-8">
      <div className="px-10 flex w-full h-full items-center justify-between text-btnwhite border-2 gap-14">
        <div className="w-full border-2">
          <p>About Us</p>
          <p>Partner with Us</p>
          <p>Work with Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Blogs</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="text-center">
          <div>
            <img src={logo} alt="logo" className="mx-auto" />
            <p className="w-30  border-2">
              2nd Floor, Mantri Avenue, 8th Block, Koramangala, Bengaluru,
              Karnataka
            </p>
            <p>+91 987 654 3210</p>
            <p>futurense@email.com</p>
            <div className="flex items-center gap-2">
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
