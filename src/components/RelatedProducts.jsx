import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  // console.log(category, subCategory);

  const { products } = useContext(shopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      // console.log(productsCopy);

      productsCopy = productsCopy.filter((item) => item.category == category);

      productsCopy = productsCopy.filter(
        (item) => item.subCategory == subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-12 ">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      {/* products div  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {related.map((item, index) => (
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

export default RelatedProducts;
