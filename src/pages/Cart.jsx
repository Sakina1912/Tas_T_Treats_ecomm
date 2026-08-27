import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartCard from "../components/CartCard";
import CheckoutForm from "../components/CheckoutForm";
// const initialCartState = {
//   items = [],
// }

const Cart = () => {
  // function cartReducer(state, action) {
  //   switch (action.type) {
  //     case "ADD_ITEM": {
  //       const existingItem = state.find(
  //         (item) =>
  //           item.id === action.payload.id && item.size === action.payload.size,
  //       );
  //       if (existingItem) {
  //         return state.map((item) =>
  //           item.id === action.payload.id && item.size === action.payload.size
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item,
  //         );
  //       }
  //       return [
  //         ...state,
  //         {
  //           ...action.payload,
  //           quantity: 1,
  //         },
  //       ];
  //     }
  //     case "REMOVE_ITEM":
  //       return state.filter((item) => item.id !== action.payload.id);
  //     default:
  //       return state;
  //   }
  // }
  // const [state, dispatch] = useReducer(cartReducer, initialCartState);
  // const [cart, dispatch] = useReducer(cartReducer, []);
  const { cart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);

  // const [showToast,setShowToast] = useState(false)

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  console.log(cart);

  //whatsapp order function
  //   const handleWhatsAppOrder = () => {
  //     // const cartTotal = cart.reduce(
  //     //   (total, item) => total + item.price * item.quantity,
  //     //   0,
  //     // );

  //     const orderItems = cart
  //       .map(
  //         (item) =>
  //           `${item.name} - ${item.size} × ${item.quantity} = ₹${
  //             item.price * item.quantity
  //           }`,
  //       )
  //       .join("\n");

  //     const message = `Hello! I would like to place an order:
  //     Customer Details
  // Name: Sakina
  // Phone: 9876543210
  // Address: 123 ABC Street, Mumbai

  // ${orderItems}

  // Total: ₹${cartTotal}

  // Thank you!`;

  //     const phoneNumber = "919586966532";

  //     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //       message,
  //     )}`;

  //     window.open(whatsappUrl, "_blank");
  //   };
  return (
    // <div>
    //   <h1 className="mt-10">Your Cart</h1>

    //   {cart.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
    //       {cart.map((item) => (
    //         <CartCard key={`${item.id}-${item.size}`} item={item} />
    //       ))}
    //     </div>
    //   )}
    //   <button type="button">Checkout: </button>
    // </div>

    <div className="min-h-screen bg-brand-cream px-6 py-10 text-brand-green">
      <h1 className="mb-6 text-3xl font-bold">
        Your Cart - ({totalItems} items)
      </h1>

      {cart.length === 0 ? (
        <h2 className="text-brand-muted text-xl font-bold">
          Your cart is empty.
        </h2>
      ) : (
        <div>
          {cart.map((item) => (
            <CartCard key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>
      )}
      {/* {cart.length > 0 ? (
        <button
          type="button"
          className="rounded-lg border px-3 py-2 text-2xl font-bold transition border-brand-rust bg-brand-rust text-brand-white w-full cursor-pointer hover:bg-brand-green"
        >
          Checkout - {cartTotal}
        </button>
      ) : (
        <p>Please keep shopping with us</p>
      )} */}
      {cart.length > 0 ? (
        <div>
          <div className="flex justify-between p-4">
            <h3 className="text-2xl text-brand-rust font-bold">Total</h3>
            <h2 className="text-4xl text-brand-rust font-bold">₹{cartTotal}</h2>
          </div>
          <button
            type="button"
            className="rounded-lg border px-3 py-2 text-2xl font-bold transition border-brand-rust bg-brand-rust text-brand-white w-full cursor-pointer hover:bg-brand-green"
            // onClick={handleWhatsAppOrder}
            onClick={() => setShowForm(true)}
          >
            Order on WhatsApp
          </button>
        </div>
      ) : (
        <p>Please keep shopping with us</p>
      )}

      {showForm && <CheckoutForm setShowForm={setShowForm} />}
    </div>
  );
};

export default Cart;
