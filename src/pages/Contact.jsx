import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-5 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-15 ">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            {" "}
            1-20/1 Hanuman Temple Panchagaon <br />
            Narayankhed ,Sangareddy ,Telangana
          </p>
          <p className="text-gray-500">
            +91 7093000795 <br />
            malleshusirikapally@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            {" "}
            careers at forever
          </p>
          <p className="text-gray-500">
            {" "}
            learn more about our teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-[#8075b6] hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
