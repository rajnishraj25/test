import React from "react";

const LifeRaceMob = () => {
  return (
    <div className=" md:hidden w-full min-h-[354px] text-center">
      <div className=" w-full h-full px-10 py-12">
        <h2 className="text-center text-btnwhite font-ppright text-[50px]  leading-[54px] tracking-[-1px]">
          Life is a race,
          <br /> why not <br />{" "}
          <span className="bg-yello text-black"> stay ahead </span> <br /> in
          it?
        </h2>
        <button className="min-w-[132px] px-6 rounded-[6px] py-2 bg-btnwhite text-black my-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LifeRaceMob;
