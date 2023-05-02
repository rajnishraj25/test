import React from "react";
import Slider from "react-slick";

const CrausalMob = () => {
  const settingsMob = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="md:hidden w-full min-h-[415px] h-full">
      <div className="w-full h-full px-10 py-14">
        <div className="text-btnwhite text-center">
          <h2 className="text-[36px] leading-[39px] font-medium font-ppright tracking-[-0.5px]">
            Industry Tethers
          </h2>
          <p className="inter text-[16px] leading-[19px] tracking-[-0.025px] font-medium">
            Get mentored by Industry Leaders and be a part of the community!
          </p>
        </div>
        <div className="w-full  overflow-hidden">
          <Slider {...settingsMob}>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
                src="https://www.youtube-nocookie.com/embed/809CjYYDcHs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
                src="https://www.youtube-nocookie.com/embed/CJK3Qz8bP3U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
                src="https://www.youtube-nocookie.com/embed/MSe-joccw6o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
                src="https://www.youtube-nocookie.com/embed/gOWM7bdqIcY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
                src="https://www.youtube-nocookie.com/embed/CJK3Qz8bP3U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full ">
              <iframe
                width="360"
                height="350"
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

export default CrausalMob;
