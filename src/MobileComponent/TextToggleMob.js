import React from "react";
import LifeRaceMob from "./LifeRaceMob";

const TextToggleMob = () => {
  return (
    <>
      <LifeRaceMob />
      <div className="md:hidden w-full min-h-[850px] text-btnwhite ">
        <div className=" w-full h-full px-10">
          <div className="py-9">
            <h3 className="text-4xl tracking-[-1px] font-medium font-ppright">
              This is for you, if
            </h3>
            <div className="min-w-[280px] min-h-[244px] border-2 border-yello rounded-[5px] flex flex-col gap-6 p-4  mt-2">
              <p className="text-[14px] font-normal inter leading-[16px]  border-l-2  border-yello tracking-[-0.025px]border-yello pl-2">
                you are aspiring for a high growth career in data field, either
                in the data science, ML track or the engineering and MLOps track
                and Engineering, this program will provide you with the right
                knowledge, tools, technologies and a prestigious IIT PG Diploma
                credential to accelerate your career.
              </p>
              <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
                you are an aspiring or a current software and technology
                professional, this PG diploma program will help you hone high
                in-demand skills such as big data engineering, cloud computing,
                and machine learning.
              </p>
            </div>
          </div>
          <div className="py-9">
            <h3 className="text-4xl tracking-[-1px] font-medium font-ppright">
              This is not for you, <br /> if you don’t have
            </h3>
            <div className="min-w-[280px] min-h-[244px] border-2 border-yello rounded-[5px] flex flex-col gap-6 p-4  mt-2">
              <p className="text-[14px] font-normal inter leading-[16px]  border-l-2 tracking-[-0.025px] border-yello pl-2">
                BTech in engineering, IT or science (4-year Program) or a B.Sc
                or master’s degree in science, Math or Stats or relevant field,
                or an MCA
              </p>
              <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
                A minimum of 60% marks in UG/PG or a minimum CGPA of 6.0 on a
                scale of 10 with corresponding proportional requirements when
                the scales are other than 10.
              </p>
              <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
                The applicant must be a working professional with a minimum of
                two years of work experience (after qualifying degree) at the
                time of registration to the Program. - The applicant must
                qualify the pre-screen test conducted by IIT Jodhpur or its
                appointed agency.
              </p>
              {/* <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
              Have a work experience of minimum 2 years (after qualifying
                degree) 
                </p>
                <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
                Qualify for the written test conducted by Futurense
                </p>
                <p className="text-[14px] font-normal inter leading-[16px] tracking-[-0.025px] border-l-2 border-yello pl-2">
                Have the zeal to keep up with the ongoing trends in technology
                space
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextToggleMob;
