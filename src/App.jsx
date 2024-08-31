import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ClipLoader from "react-spinners/ClipLoader";
// import { useState, CSSProperties } from "react";

import Lottie from "lottie-react";
import loader from "./animations/loader.json";

const App = () => {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f59565");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  relative ">
      {loading ? (
        <div className="flex items-center absolute top-[0%] left-0  w-[100vw]  h-[100vh] border-box justify-center bg-[#8075b6] ">
          <Lottie animationData={loader} loop={true} />
        </div>
      ) : (
        <div>
          <ToastContainer autoClose={3000} theme="colored" />
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
