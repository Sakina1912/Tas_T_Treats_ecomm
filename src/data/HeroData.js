import heroSnack1 from "../assets/hero-snack-1.jpg";
import heroSnack2 from "../assets/hero-snack-2.jpg";
import heroSnack3 from "../assets/hero-snack-3.jpg";

const heroSlides = [
  {
    id: crypto.randomUUID(),
    image: heroSnack1,
    heading: "Snacks for your evening chai.",
    description: "A little crunch makes every chai better.",
    button: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    image: heroSnack2,
    heading: "Homemade snacks, made with love.",
    description: "Spicy • Crunchy • Full of flavour",
    button: "Explore Snacks",
  },
  {
    id: crypto.randomUUID(),
    image: heroSnack3,
    heading: "Small Bite, Big Energy.",
    description: "Made with care, just like your home.",
    button: "Shop Now",
  },
];

export default heroSlides;
