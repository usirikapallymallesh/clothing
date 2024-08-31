import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { products, currency, cartItems, updateQuantity } =
    useContext(shopContext);
  // console.log(products,currency,navigate) ;
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-5">
      <div className="text-2xl mb-1">
        <Title text1={"YOURS"} text2={"CART"} />
      </div>

      <div className={`${cartData.length === 0 ? "block" : "hidden"} `}>
        <p className="text-center text-gray-700 font-medium text-xl py-20 my-10">
          Your cart is empty. Add some products to continue.
        </p>
      </div>

      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          //  console.log(item);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg  font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value == "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div
        className={`${
          cartData.length === 0 ? "hidden" : "block"
        } flex justify-end my-20`}
      >
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => {
                navigate("/place-order");
              }}
              className="bg-[#8075b6] text-white text-sm my-8 px-8 py-3 "
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
