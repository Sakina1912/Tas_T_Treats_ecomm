import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const initialFormData = {
  name: "",
  phoneNumber: "",
  address: "",
  pinCode: "",
};

const CheckoutForm = ({ setShowForm }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the customer form submit");
    setFormData(initialFormData);
    setShowForm(false);
    handleWhatsAppOrder();
  };

  const handleWhatsAppOrder = () => {
    const cartTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const orderItems = cart
      .map(
        (item) =>
          `${item.name} - ${item.size} × ${item.quantity} = ₹${
            item.price * item.quantity
          }`,
      )
      .join("\n");

    const message = `Hello! I would like to place an order:
    Customer Details
Name: ${formData.name}
Phone: ${formData.phoneNumber}
Address: ${formData.address}
Pin code: ${formData.pinCode}

${orderItems}

Total: ₹${cartTotal}

Thank you!`;

    const phoneNumber = import.meta.env.VITE_PHONENUMBER;
    console.log(phoneNumber, "phone number");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    // const whatsappUrl = `https://wa.me/${phoneNumber}`;
    console.log("WhatsApp URL:", whatsappUrl);
    window.open(whatsappUrl, "_blank");
    clearCart();
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Please fill in the details</h2>
    //   <input
    //     type="text"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //     placeholder="Your name"
    //   />

    //   <input
    //     type="tel"
    //     name="phone"
    //     value={formData.phoneNumber}
    //     onChange={handleChange}
    //     placeholder="Phone number"
    //   />

    //   <textarea
    //     name="address"
    //     value={formData.address}
    //     onChange={handleChange}
    //     placeholder="Delivery address"
    //   />
    //   <div>
    //     <button type="button">Cancel</button>
    //     <button type="submit">Continue</button>
    //   </div>
    // </form>

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green-deep/60 px-4 backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl border border-brand-border bg-brand-cream p-5 shadow-2xl sm:p-6">
        {/* Close button */}
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-brand-muted transition hover:bg-brand-surface hover:text-brand-rust"
          aria-label="Close checkout form"
        >
          ×
        </button>

        {/* Heading */}
        <div className="mb-6 pr-8">
          <h2 className="text-2xl font-bold text-brand-green">
            Please fill in your details
          </h2>

          {/* <p className="mt-1 text-sm text-brand-muted">
            Enter your details before continuing to WhatsApp.
          </p> */}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-brand-green"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-brand-border bg-brand-white px-4 py-3 text-brand-green outline-none transition placeholder:text-brand-muted/70 focus:border-brand-rust focus:ring-2 focus:ring-brand-rust/20"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-brand-green"
            >
              Contact Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-brand-border bg-brand-white px-4 py-3 text-brand-green outline-none transition placeholder:text-brand-muted/70 focus:border-brand-rust focus:ring-2 focus:ring-brand-rust/20"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-semibold text-brand-green"
            >
              Delivery Address
            </label>

            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Enter your complete delivery address"
              className="w-full resize-none rounded-lg border border-brand-border bg-brand-white px-4 py-3 text-brand-green outline-none transition placeholder:text-brand-muted/70 focus:border-brand-rust focus:ring-2 focus:ring-brand-rust/20"
            />
          </div>

          <div>
            <label
              htmlFor="pincode"
              className="mb-2 block text-sm font-semibold text-brand-green"
            >
              Pin code:
            </label>

            <input
              id="pincode"
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
              placeholder="Enter your pin code"
              className="w-full rounded-lg border border-brand-border bg-brand-white px-4 py-3 text-brand-green outline-none transition placeholder:text-brand-muted/70 focus:border-brand-rust focus:ring-2 focus:ring-brand-rust/20"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              //   onClick={onClose}
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-brand-rust px-5 py-3 font-semibold text-brand-rust transition hover:bg-brand-rust/10"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-brand-rust px-5 py-3 font-semibold text-brand-cream transition hover:bg-brand-rust-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              //   onClick={handleWhatsAppOrder}
            >
              Continue to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
