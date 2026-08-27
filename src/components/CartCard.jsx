import React from "react";
import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../context/CartContext.jsx";

const CartCard = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        id: item.id,
        // name: item.name,
        // img: item.img,
        size: item.size,
        // price: selectedVariant.price,
      },
    });
    // console.log(cart, "this is the cart");
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        id: item.id,
        // name: item.name,
        // img: item.img,
        size: item.size,
        // price: selectedVariant.price,
      },
    });
    // console.log(cart, "this is the cart");
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: item.id,
        // name: item.name,
        // img: item.img,
        size: item.size,
        // price: selectedVariant.price,
      },
    });
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border border-brand-border bg-white p-4">
      {/* Product image */}
      <img
        src={item.img}
        alt={item.name}
        className="h-24 w-24 rounded-lg object-cover"
      />

      {/* Product information */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-brand-green">{item.name}</h2>

        <p className="text-sm text-brand-muted">Size: {item.size}</p>

        <p className="mt-1 font-medium text-brand-rust">₹{item.price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3 text-brand-muted">
        <button type="button" onClick={decreaseQuantity}>
          <CiCircleMinus className="h-8 w-8 cursor-pointer" />
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          //   className="hover:bg-brand-rust hover:text-brand-white"
          onClick={increaseQuantity}
        >
          <CiCirclePlus className="h-8 w-8 cursor-pointer hover:bg-brand-rust hover:text-brand-white" />
        </button>
      </div>

      {/* Total */}
      <p className="font-semibold text-brand-muted">
        ₹{item.price * item.quantity}
      </p>
      <button
        type="button"
        onClick={removeItem}
        className="text-brand-muted hover:text-brand-rust"
      >
        <IoIosClose className="h-8 w-8" />
      </button>
    </div>
  );
};

export default CartCard;
