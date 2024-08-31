import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bottom-1 footer-div mt-9 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5  text-sm">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} className="mb-5 w-32 static" alt="" />
          </Link>
          <p className="w-full md:w-2/3  text-gray-600">
            Our clothing website features a diverse range of stylish apparel for
            men, women, and children. Enjoy easy navigation, secure checkout,
            and exclusive promotions tailored to enhance your shopping
            experience.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>
              {" "}
              <Link to={"/"}>Home </Link>
            </li>
            <li>
              {" "}
              <Link to={"/about"}>About Us </Link>
            </li>
            <li>
              {" "}
              <Link to={"/"}>Delivery</Link>
            </li>
            <li>
              {" "}
              <Link to={"/"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:7093000795">+91 7093000795</a>
            </li>
            <li>
              <a href="mailto:  malleshusirikapally@gmail.com">
              malleshusirikapally@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">&copy;Copy Right 2024</p>
      </div>
    </div>
  );
};

export default Footer;
