import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import tasLogo from "../assets/tas-t-navbar.svg";
import { CiShoppingCart } from "react-icons/ci";
import Footer from "./Footer";
import { CartContext } from "../context/CartContext";
// import CartCard from "../components/CartCard";

const Layout = (props) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="min-h-screen bg-brand-cream text-slate-100">
      <header className="sticky top-0 z-30 h-20 border-b border-brand-border bg-brand-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-slate-950">
              IM
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Cinema
              </p>
              <p className="text-base font-semibold text-white">Movie Hub</p>
            </div> */}
            {/* <p>Home</p> */}
            <img
              src={tasLogo}
              alt="Tas_T_Treats logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <Link
              to="/"
              className="rounded-full px-4 py-2 text-md font-medium text-brand-gold transition hover:brand-rust-deeper hover:scale-125"
            >
              Home
            </Link>
            {/* <Link
              to="/Snacks"
              className="rounded-full px-4 py-2 text-md font-medium text-brand-gold transition hover:brand-rust-deeper hover:scale-125"
            >
              Snacks
            </Link> */}
            <Link
              to="/About"
              className="rounded-full px-4 py-2 text-md font-medium text-brand-gold transition hover:brand-rust-deeper hover:scale-125"
            >
              About
            </Link>
            <Link
              to="/Cart"
              className="rounded-full px-4 py-2 text-md font-medium text-brand-gold transition hover:brand-rust-deeper hover:scale-125"
            >
              <div className="flex justify-center items-center">
                Cart <CiShoppingCart className="text-xl" />{" "}
                <sup>{cart.length}</sup>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        {props.children}
      </main>

      {/* <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        Built with React, Tailwind, and TMDb.
      </footer> */}
      <Footer />
    </div>
  );
};

export default Layout;
