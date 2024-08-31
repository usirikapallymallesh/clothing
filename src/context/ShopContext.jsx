import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext({});

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  // const navigate =useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    // code for adding item to cart
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size]++;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    toast.success("item added successfully");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
            // console.log([items][item])
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    // console.log(itemId, size, quantity, cartItems);

    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    // code for updating quantity in cart
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const currency = "₹";
  const deliveryFee = "10";
  const value = {
    updateQuantity,
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    setShowSearch,
    showSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};
export default ShopContextProvider;
