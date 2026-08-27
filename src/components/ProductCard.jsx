import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Toast from "./Toast.jsx";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { dispatch } = useContext(CartContext);

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        img: product.img,
        size: selectedVariant.size,
        price: selectedVariant.price,
      },
    });
    // console.log(cart, "this is the cart");

    // alert(`${product.name} added to the cart!`);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <figure className="m-0">
        <img
          className="aspect-square w-full object-cover"
          src={product.img}
          alt={product.name}
        />

        <figcaption className="p-5 pb-0">
          {/* <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-rust">
            {product.category}
          </p> */}
          <h2 className="text-xl font-bold text-brand-green">{product.name}</h2>
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-6 text-brand-muted">
          {product.description}
        </p>

        <div className="mt-auto" role="group" aria-label="Choose product size">
          <p className="mb-2 text-sm font-semibold text-brand-green">
            Choose Quantity:
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.size === variant.size;

              return (
                <button
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                    isSelected
                      ? "border-brand-rust bg-brand-rust text-brand-white"
                      : "border-brand-border bg-brand-cream text-brand-green hover:border-brand-rust"
                  }`}
                  key={variant.size}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  aria-pressed={isSelected}
                >
                  {variant.size}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-brand-border pt-4">
          <p className="text-xl font-bold text-brand-rust">
            ₹{selectedVariant.price}
          </p>
          <button
            className="rounded-lg bg-brand-green px-4 py-2 font-semibold text-brand-white transition hover:bg-brand-green-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:cursor-not-allowed
    disabled:bg-brand-muted
    disabled:opacity-70"
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      </div>
      {showToast && (
        <Toast
          message={`${product.name} added to your cart!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </article>
  );
};

export default ProductCard;
