import { Link } from "react-router-dom";
import tasLogo from "../assets/tas-t-treats.svg";

const Footer = () => {
  return (
    <footer className="border-t border-brand-green-mid bg-brand-green-deep text-brand-cream mt-5">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <img
            src={tasLogo}
            alt="Tas-T Treats logo"
            className="mb-4 w-[50%] object-contain"
          />

          <h2 className="mb-3 text-xl font-bold text-brand-gold">
            Tas-T Treats
          </h2>

          <p className="max-w-sm text-sm leading-6 text-brand-border">
            Homemade Indian snacks crafted with love, tradition, and the finest
            natural ingredients. Bringing the taste of home to your doorstep
            since 2018.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-lg font-bold text-brand-gold">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm text-brand-border">
            <li>
              <Link className="transition hover:text-brand-gold" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="transition hover:text-brand-gold" to="/Snacks">
                Snacks
              </Link>
            </li> */}
            <li>
              <Link className="transition hover:text-brand-gold" to="/About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-brand-gold" to="/Cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="mb-4 text-lg font-bold text-brand-gold">Contact Us</h2>

          <div className="space-y-3 text-sm text-brand-border">
            <p>Khambat, Gujarat</p>
            <p>
              <a
                className="transition hover:text-brand-gold"
                href="mailto:hello@tasttreats.com"
              >
                hello@tasttreats.com
              </a>
            </p>
            <p>
              <a
                className="transition hover:text-brand-gold"
                href="tel:+910000000000"
              >
                +91 XXXXX XXXXX
              </a>
            </p>
          </div>
        </address>
      </div>

      <div className="border-t border-brand-green-mid px-4 py-5 text-center text-sm text-brand-border">
        <p>© 2026 Tas-T Treats. All rights reserved.</p>
        <p className="mt-1">Made with love for snack lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
