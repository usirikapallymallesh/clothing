import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";


const Product = () => {
  const productId = useParams();

  const { products, currency,addToCart } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize]=useState("");


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId.id) {
        setImage(item.image[0]);
        setProductData(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* product data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* product images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink h-24 sm:h-48 object-cover"
              />
            ))}
          </div>
          <div className=" w-full sm:w-[80%]">
            <img
              src={image}
              alt=""
              className="w-full h-auto object-cover sm:object-fit-contain"
            />
          </div>
        </div>
        {/* product details  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2"> {productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_dull_icon} className="w-3 5" alt="" />
            <p className="pl-2 "> (122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}{" "}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}{" "}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">{productData.sizes.map((item,index) => 
              <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item==size ?'border-orange-500':''}`} key={index}>{item}</button>
            )}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,size)} className="bg-[#8075b6] text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr  className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>cash on delivery is available on this product .</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
      
        </div>
      </div>
      {/* description and review section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Our collection of shirts offers a perfect blend of style, comfort, and versatility. From classic button-downs to trendy graphic tees, we provide a wide range of designs to suit every taste and occasion. Crafted from high-quality fabrics, our shirts ensure a comfortable fit, making them ideal for both casual outings and formal events.</p>
          <p>Each shirt is designed with attention to detail, featuring unique patterns, vibrant colors, and modern silhouettes. Whether you're dressing up for a special occasion or looking for everyday wear, our shirts will elevate your wardrobe. Explore our selection and find the perfect shirt to express your personal style!</p>
        </div>
      </div>
      {/* similar products  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
