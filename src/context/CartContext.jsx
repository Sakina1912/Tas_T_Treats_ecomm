import React from "react";
import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) =>
          item.id !== action.payload.id || item.size !== action.payload.size,
      );
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }, [cart]);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
