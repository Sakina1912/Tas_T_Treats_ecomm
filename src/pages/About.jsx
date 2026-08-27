import React from "react";
import heroSnack from "../assets/hero-snack-1.jpg";

const AboutSection = () => {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-rust">
            Our Story
          </p>

          <h2 className="text-3xl font-bold text-brand-green sm:text-4xl">
            Homemade Goodness, Made With Love
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Image / visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroSnack}
                alt="Homemade Indian snacks"
                className="h-[400px] w-full object-cover sm:h-[450px]"
              />
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-5 -right-3 rounded-xl bg-brand-green px-5 py-4 text-brand-cream shadow-lg sm:-right-5">
              <p className="text-sm font-medium">Made with care</p>
              <p className="mt-1 font-semibold text-brand-gold">
                Just like home
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="text-brand-green">
            <h3 className="text-2xl font-bold sm:text-3xl">
              A little taste of home in every bite.
            </h3>

            <p className="mt-5 leading-7 text-brand-muted">
              At Tas-T Treats, we believe that some of the best memories begin
              with a simple snack. Inspired by the flavours we grew up loving,
              we make traditional Indian snacks with the same warmth and care
              you would expect from a homemade kitchen.
            </p>

            <p className="mt-4 leading-7 text-brand-muted">
              From crispy puris to savoury favourites, every batch is prepared
              in small quantities with carefully selected ingredients. Our goal
              is simple — to bring you delicious, comforting snacks that feel
              familiar from the very first bite.
            </p>

            <p className="mt-4 leading-7 text-brand-muted">
              Whether you're enjoying a quiet cup of chai, sharing a snack with
              family, or looking for something special for your next gathering,
              we're here to add a little more flavour to the moment.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-brand-border bg-brand-surface p-4">
                <p className="font-semibold text-brand-green">Homemade</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Prepared with care in small batches.
                </p>
              </div>

              <div className="rounded-xl border border-brand-border bg-brand-surface p-4">
                <p className="font-semibold text-brand-green">Fresh</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Made fresh so every bite tastes its best.
                </p>
              </div>

              <div className="rounded-xl border border-brand-border bg-brand-surface p-4">
                <p className="font-semibold text-brand-green">Traditional</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Inspired by flavours we know and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
