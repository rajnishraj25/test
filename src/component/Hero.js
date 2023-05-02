import React from "react";
import logo from "../Assects/logo.png";
import iitlogo from "../Assects/iitlogo.png";
import Brochure from "../Assects/Brochure.pdf";
import HeroMob from "../MobileComponent/HeroMob";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        FullName: yup
          .string()
          .matches(/^[a-zA-Z0-9\s-]*$/, "Invalid characters in name")
          .required(),
        ContactPrimary: yup.string().required(),
        Email: yup.string().required(),
        Qualification: yup.string().required(),
        City: yup.string().required(),
        Workexperience: yup.string().required(),
        CompanyName: yup.string().required(),
      })
    ),
    defaultValues: {},
  });
  const onSubmit = () => {
    reset();
  };

  return (
    <>
      <div className="w-full min-h-[792px] h-full bg_img hidden md:block  ">
        <div className="gredient w-full min-h-[792px] h-full relative z-10">
          <div className="gradient2 w-full min-h-[792px] h-full relative z-20">
            <div className="px-24">
              <div className="flex items-center justify-between min-h-20">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[72px] h-14 cursor-pointer"
                />
                <a href="https://admission.futurense.com/" target="_blank">
                  <button className="w-auto relative btn_interaction text-sm font-medium h-10 bg-btnwhite rounded-md cursor-pointer text-black px-[50px] py-2">
                    Apply Now
                  </button>
                </a>
              </div>
              <div className="max-w-[85px] w-full  max-h-14 h-full mt-8">
                <img src={iitlogo} alt="logo" className="w-full h-full" />
              </div>
              <div className="flex items-center justify-between min-h-[500px] gap-16 mt-8">
                <div className="max-w-[954px] w-full min-h-[420px]  ">
                  <h3 className="text-btnwhite font-ppright leading-[-6px] tracking-[-4px] text-[82px] line_height w-full">
                    PG Diploma in <br />
                    <span className="underline_1">
                      Data Science
                    </span> <br /> and Engineering
                  </h3>
                  <div className="flex text-btnwhite mt-8 inter items-center gap-6 text-lg font-medium w-full  ">
                    <ul className="list-disc w-[40%]">
                      <li>IIT Alumni Status</li>
                      <li>
                        Developed by ex-MAANG experts and esteemed IIT
                        professors
                      </li>
                    </ul>

                    <ul className="list-disc  w-[60%]">
                      <li>Hands on with ChatGPT and emerging technologies</li>
                      <li> Masterclasses by top Industry Experts</li>
                      <li> Futurense Bridge Course</li>
                    </ul>
                  </div>
                  <div className="flex gap-4 items-cente mt-8">
                    <a href="https://admission.futurense.com/" target="_blank">
                      <button className="w-auto h-12 px-11 py-3 rounded-md bg-btnwhite relative btn_interaction ">
                        Become an IITian
                      </button>
                    </a>
                    <a href={Brochure} download>
                      <button className="w-auto h-12 px-11 py-3 rounded-md bg-black  border-2 border-btnwhite relative  btn_interaction_black hover:text-black focus:text-black">
                        Download Brochure
                      </button>
                    </a>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form max-w-[550px] w-full minh-[480px] p-2 "
                >
                  <div>
                    <input
                      name="FullName"
                      id="FullName"
                      {...register("FullName")}
                      type="text"
                      placeholder="Full Name"
                      className=" w-full px-1 py-3 pl-2 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium"
                    />
                    <p className="text-red-600 text-sm mt-[1px]">
                      {errors.FullName?.message}
                    </p>
                  </div>

                  <div className="flex justify-between gap-2">
                    <div className="w-full">
                      <input
                        name="ContactPrimary"
                        id="ContactPrimary"
                        {...register("ContactPrimary")}
                        type="phone"
                        placeholder="Contact Primary"
                        className="px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium w-full my-3"
                      />
                      <p className="text-red-600 text-sm mt-[1px]">
                        {errors.ContactPrimary?.message}
                      </p>
                    </div>

                    <div className="w-full">
                      <input
                        type="phone"
                        placeholder="Alternative Contact "
                        className="px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium w-full my-3"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      name="Email"
                      id="Email"
                      {...register("Email")}
                      type="email"
                      placeholder="Email "
                      className="px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium w-full my-3"
                    />
                    <p className="text-red-600 text-sm mt-[1px]">
                      {errors.Email?.message}
                    </p>
                  </div>

                  <div className="flex justify-between gap-2">
                    <div className="w-full">
                      <input
                        name="Qualification"
                        id="Qualification"
                        {...register("Qualification")}
                        type="text"
                        placeholder="Qualification"
                        className=" w-full px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium  my-3"
                      />
                      <p className="text-red-600 text-sm mt-[1px]">
                        {errors.Qualification?.message}
                      </p>
                    </div>

                    <div className="w-full">
                      <input
                        name="City"
                        id="City"
                        {...register("City")}
                        type="text"
                        placeholder="City"
                        className=" w-full px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium  my-3"
                      />
                      <p className="text-red-600 text-sm mt-[1px]">
                        {errors.City?.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="w-full">
                      <input
                        name="Workexperience"
                        id="Workexperience"
                        {...register("Workexperience")}
                        type="text"
                        placeholder="Work experience"
                        className="px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium w-full my-3"
                      />
                      <p className="text-red-600 text-sm mt-[1px]">
                        {errors.Workexperience?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <input
                        name="CompanyName"
                        id="CompanyName"
                        {...register("CompanyName")}
                        type="text"
                        placeholder="Company Name"
                        className="px-1 py-3 pl-1 placeholder:text-center bg-transparent border-2 border-btnwhite outline-0 rounded-[5px] text-btnwhite font-medium w-full my-3"
                      />
                      <p className="text-red-600 text-sm mt-[1px]">
                        {errors.CompanyName?.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center mt-2">
                    <button
                      type="submit"
                      className="w-auto text-sm font-medium h-10 bg-btnwhite rounded-md cursor-pointer text-black px-[50px] py-2 m-auto relative btn_interaction"
                    >
                      Get a call back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroMob />
    </>
  );
};

export default Hero;
