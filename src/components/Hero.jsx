import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row  border-gray-400 ">
      <section className="hero-left w-full sm:w-1/2 flex items-center  justify-center py-20 sm:py-20">
        <div className="text-gray-800">
          <div className="flex items-center gap-3">
            <p className="w-8 md:w-11 h-[2px] bg-[red]"></p>
            <p className="font-medium text-sm md:text-base bad-script-regular">
              our best seller
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest collection
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base bad-script-regular">
              our best seller
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[red]"></p>
          </div>
        </div>
      </section>
      <img src={assets.hero_img} alt="" className="w-full sm:w-1/2 border " />
    </div>
  );
};

export default Hero;
