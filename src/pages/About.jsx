import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1="ABOUT" text2="OUR STORE" />
      </div>
      <div className=" flex flex-col md:flex-row  gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our e-commerce clothing brand, where style meets
            sustainability! We are passionate about providing high-quality,
            fashionable apparel that empowers individuals to express their
            unique identities.
          </p>
          <p>
            Our commitment to ethical practices ensures that every piece is
            responsibly sourced. With a focus on exceptional customer service,
            we strive to create a seamless shopping experience that fosters
            lasting relationships and community.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {" "}
            Our mission is to provide stylish, high-quality clothing that
            empowers individuals to express their unique identities. We are
            committed to sustainability, exceptional customer service, and
            fostering a community where fashion meets comfort and confidence for
            everyone.
          </p>
        </div>
      </div>
      <div className="text-xl py-6 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-10">
        <div className="text-medium px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg text-gray-800	">Quality Assurance</b>
          <p className="text-gray-600 text-base	 ">
            Quality assurance in e-commerce ensures reliable, secure, and
            user-friendly online shopping experiences. By implementing rigorous
            testing processes, businesses can enhance customer satisfaction,
            build trust, and reduce costs associated with returns, ultimately
            driving growth and competitiveness in the digital marketplace.
          </p>
        </div>
        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg	text-gray-800">Convince Assurance</b>
          <p className="text-gray-600 text-base	 ">
            Quality assurance is essential for e-commerce success, ensuring
            reliable, secure, and user-friendly websites that build customer
            trust, reduce costs, and drive growth in the competitive digital
            marketplace
          </p>
        </div>
        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg	text-gray-800">Exceptional Customer Support</b>
          <p className="text-gray-600 text-base	 ">
            Exceptional E-commerce customer support provides personalized,
            empathetic, and efficient assistance that builds trust, loyalty, and
            positive brand perception, ultimately driving growth and customer
            satisfaction.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
