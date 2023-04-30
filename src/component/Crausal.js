import React from "react";
import Slider from "react-slick";
// import slid from "../Assects/slide1";
// import slid1 from "../Assects/slide2";

const Crausal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <div className="w-full h-[746px]">
      <div className="w-full h-full px-24 py-20">
        <div className="text-center text-btnwhite">
          <h3 className="text-[72px] leading-[75px] tracking-[-4px] font-ppright font-medium">
            Industry Tether
          </h3>
          <p className="inter font-normal text-[29px] leading-[29px] tracking-[-2px] ">
            Get mentored by Industry Leaders and be a part of the community!
          </p>
        </div>
        <div className="w-full min-h-[356px]  p-10    items-center justify-between overflow-hidden  mt-16   border-red-50">
          <Slider {...settings}>
            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/809CjYYDcHs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/CJK3Qz8bP3U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/MSe-joccw6o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/gOWM7bdqIcY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/CJK3Qz8bP3U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-[450px] px-2">
              <iframe
                width="450"
                height="315"
                src="https://www.youtube-nocookie.com/embed/809CjYYDcHs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Crausal;
