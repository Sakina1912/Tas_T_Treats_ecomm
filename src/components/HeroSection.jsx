import React, { useEffect, useState } from "react";
import heroSlides from "../data/HeroData.js";

const HeroSection = () => {
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideData = heroSlides[currSlide];
  // console.log(slideData, "curr Slide data");
  // console.log(heroSlides, "slides data");
  // console.log(currSlide, "currSlide");
  return (
    <section className="relative h-[calc(100vh-5rem)] w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src={slideData.image}
        alt={slideData.heading}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-xl px-8 md:px-16">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            {slideData.heading}
          </h1>

          <p className="mt-4 text-lg text-white md:text-xl">
            {slideData.description}
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-brand-gold-deep px-6 py-3 font-semibold text-brand-cream transition hover:bg-brand-green-mid"
          >
            {slideData.button}
          </button>
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  currSlide === index
                    ? "h-3 w-8 bg-brand-rust"
                    : "h-3 w-3 bg-brand-cream/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
