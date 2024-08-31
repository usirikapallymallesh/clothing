import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(shopContext);
  // const ctx =useContext (shopContext)
  // console.log(search);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const toggleCategory = (event) => {
    // console.log(event);

    if (category.includes(event.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== event.target.value));
    } else {
      setCategory([...category, event.target.value]);
    }
  };
  const toggleSubCategory = (event) => {
    // console.log(event);
    if (subcategory.includes(event.target.value)) {
      setSubcategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSubcategory([...subcategory, event.target.value]);
    }
  };

  const sortProducts = () => {
    const filterCopy = filterProducts.slice();
    // console.log(filterCopy);

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    // console.log(showSearch);

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // console.log(productCopy);

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }
    // console.log(productCopy);

    setFilterProducts(productCopy);
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [subcategory, category, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-5 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 text-xl  flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden  ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* category filters  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* sub category filters  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Top Wears
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottom Wears
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3"
                value={"WinterWears"}
                onChange={toggleSubCategory}
              />
              Winter Wears
            </p>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* product sort  */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value={"relevant"}>Sort by : Relevant</option>
            <option value={"low-high"}>Sort by : Low to High</option>
            <option value={"high-low"}>Sort by : High to Low</option>
          </select>
        </div>
        {/* map products  */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
