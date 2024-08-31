import React, { useContext, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const { search, setSearch, setShowSearch, showSearch } =
    useContext(shopContext);
  const [visible, setVisible] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
