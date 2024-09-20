import React, { useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoSearchOutline, IoCartOutline, IoMenu } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";
import { useContext } from "react";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";



const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(shopContext);

  const handleClick = () => {
    setVisible(false);
  };

  const animationMenu = useRef([]);
  const mobileMenu = useRef([]);
  const loc = useLocation();

  const addToRefs = (element) => {
    if (element && !animationMenu.current.includes(element)) {
      animationMenu.current.push(element);
    }
    // console.log(animationMenu.current);
  };

  const addToMobileRef = (element) => {
    if (element && !mobileMenu.current.includes(element)) {
      mobileMenu.current.push(element);
    }
    // console.log(animationMenu.current);
  };

  const tl2 = gsap.timeline();

  const openMobileMenu = (element) => {
    setVisible(true);
    tl2.from(mobileMenu.current, {
      duration: 1,
      opacity: 0,
      x: 30,
      delay: 0.3,
      stagger: 0.2, // Delay between each animation
    });
  };
  const onMobileClose = (element) => {
    tl2.reverse();
    setVisible(false);
  };

  useEffect(() => {
    gsap.from(animationMenu.current, {
      duration: 1,
      opacity: 0,
      y: -30,
      delay: 0.3,
      stagger: 0.2, // Delay between each animation
    });
  }, []);

  return (
    <div className="flex items-center justify-between border-box  py-5 font-medium  box-border	">
      <Link to={"/"}>
        {" "}
        <img
          src={assets.logo}
          className="w-[7.5rem]"
          alt="logo"
          ref={addToRefs}
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-base text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1"
          ref={addToRefs}
        >
          Home
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1"
          ref={addToRefs}
        >
          Collections
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1"
          ref={addToRefs}
        >
          About Us
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1"
          ref={addToRefs}
        >
          Contact Us
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 relative">
        {loc.pathname === "/collection" && (
          <IoSearchOutline
            className="text-2xl cursor-pointer"
            size={25}
            onClick={() => setShowSearch(true)}
          />
        )}

        <div className="relative group">
          <Link to={"/login"}>
            <IoMdContact className="text-2xl cursor-pointer" size={25} />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-300 text-black rounded">
              <p className="cursor-pointer hover:text-green-900 ">
                {" "}
                My Profile
              </p>
              <p className="cursor-pointer hover:text-green-900">Orders</p>
              <p className="cursor-pointer hover:text-green-900">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <IoCartOutline className="text-2xl " size={25} />
          <p className="absolute animate-pulse right-[-5px] bottom-[-5px] w-4 border-1 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>
        <IoMenu
          className="text-2xl cursor-pointer sm:hidden "
          onClick={openMobileMenu}
          size={25}
        />
      </div>
      {/* menu bar to show the nav in mobile  */}
      <div
        className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-white    transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 w-full  ">
          <div
            onClick={onMobileClose}
            className={`flex items-center gap-3 p-4 justify-start  cursor-pointer  z-20 mb-3`}
          >
            <RiArrowLeftWideFill size={25} />
            <p>Back</p>
          </div>
          <div className="px-4 sm:px-[5vw] flex flex-col gap-2  ">
            <NavLink
              onClick={handleClick}
              className="py-2 pl-6 border"
              to={"/"}
              ref={addToMobileRef}
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleClick}
              className="py-2 pl-6 border"
              to={"/collection"}
              ref={addToMobileRef}
            >
              Collections
            </NavLink>
            <NavLink
              onClick={handleClick}
              className="py-2 pl-6 border"
              to={"/about"}
              ref={addToMobileRef}
            >
              About
            </NavLink>
            <NavLink
              onClick={handleClick}
              className="py-2 pl-6 border"
              to={"/contact"}
              ref={addToMobileRef}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
