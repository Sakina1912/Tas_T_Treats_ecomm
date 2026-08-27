import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
// import heroSlidesData from "../data/HeroData.js";
import products from "../data/Products";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  //   const [heroSlide, setHeroSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setHeroSlide((prev) => (prev + 1) % heroSlidesData.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div>
      <div>
        <HeroSection />
      </div>

      <h2 className="mt-12 mb-8 text-center text-3xl font-bold text-brand-green underline decoration-brand-rust decoration-2 underline-offset-8">
        Our Products
      </h2>
      <section
        className="mx-4 grid gap-6 sm:mx-6 sm:grid-cols-2 lg:mx-auto lg:max-w-5xl lg:grid-cols-3"
        aria-label="Available snacks"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Home;
