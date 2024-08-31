import React from "react";
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  // const ctx =useContext (shopContext)
  // console.log(ctx.products);

  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    const latest = products.slice(0, 10);
    setLatestProduct(latest);
  }, []);

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-900">
          Explore our latest clothing collection, where style meets comfort and
          individuality shines through every piece. Discover unique designs that
          elevate your wardrobe effortlessly. Embrace fashion that reflects your
          personality and enhances your confidence.
        </p>
      </div>
      {/* products div  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {latestProduct.map((item, index) => (
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
  );
};

export default LatestCollection;
