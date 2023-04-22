import React from "react";

const MoreContent = () => {
  return (
    <div className="w-full h-auto">
      <div className="container w-full h-auto px-24 py-24 text-center">
        <h2 className="text-[82px] font-ppright text-btnwhite font-medium liner_height tracking-[-4px]">
          Why be content when you can have more?
        </h2>
        <h2 className="font-ppright text-[62px] leading-[67px] tracking-[-3px] font-medium text-btnwhite mt-6">
          Executive M.Tech Degree in{" "}
          <span className="bg-yello text-black px-[2px]"> 1 year </span>
        </h2>
        <p className="inter text-[24px] leading-[27px] tracking-tighter font-light text-btnwhite mt-8">
          Opt for Executive M.Tech Degree from IIT-J, post completion of PG
          Diploma in Data Science & Engineering Program  <br />
          For more information, write to xyz@abc.com
        </p>
      </div>
    </div>
  );
};

export default MoreContent;
