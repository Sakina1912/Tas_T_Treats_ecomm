const products = [
  {
    id: 1,
    title: "Puri",
    name: "Crispy Puri",
    category: "Traditional Snacks",
    img: "https://images.unsplash.com/photo-1596449870280-83df0de3f4fc?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    variants: [
      { size: "250g", price: 40 },
      { size: "500g", price: 75 },
      { size: "1kg", price: 140 },
    ],
    description: "Crispy, golden-fried Indian puris.",
    inStock: true,
  },
  {
    id: 2,
    title: "Roasted Chana Dal",
    name: "Roasted Chana Dal",
    category: "Healthy Snacks",
    img: "https://images.pexels.com/photos/106972/pexels-photo-106972.jpeg?_gl=1*157lntx*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODcxNTczNTMkbzYkZzEkdDE3ODcxNTc0MzkkajU5JGwwJGgw",
    variants: [
      { size: "250g", price: 60 },
      { size: "500g", price: 110 },
      { size: "1kg", price: 200 },
    ],
    description: "Crunchy roasted chana dal with a lightly salted taste.",
    inStock: true,
  },
  {
    id: 3,
    title: "Aloo Bhujia",
    name: "Aloo Bhujia",
    category: "Namkeen",
    img: "https://cdn.pixabay.com/photo/2026/05/03/13/59/fnur99-indian-food-10259206_1280.png",
    variants: [
      { size: "200g", price: 55 },
      { size: "400g", price: 100 },
      { size: "1kg", price: 230 },
    ],
    description: "Spicy and crunchy potato-based sev snack.",
    inStock: false,
  },

  {
    id: 4,
    title: "Garlic Murukku",
    name: "Garlic Murukku",
    category: "Traditional Snacks",
    img: "https://images.pexels.com/photos/7496253/pexels-photo-7496253.jpeg?_gl=1*rc98z2*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDYyNDYkbzgkZzEkdDE3ODc4MDY0NTQkajU5JGwwJGgw",
    variants: [
      { size: "250g", price: 80 },
      { size: "500g", price: 150 },
      { size: "1kg", price: 280 },
    ],
    description: "Crunchy murukku infused with the bold flavor of garlic.",
    inStock: true,
  },

  {
    id: 5,
    title: "Roasted Makhana",
    name: "Roasted Makhana",
    category: "Healthy Snacks",
    img: "https://images.pexels.com/photos/11463736/pexels-photo-11463736.jpeg?_gl=1*36857*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDYyNDYkbzgkZzEkdDE3ODc4MDY2OTUkajU5JGwwJGgw",
    variants: [
      { size: "100g", price: 90 },
      { size: "250g", price: 200 },
      { size: "500g", price: 380 },
    ],
    description:
      "Light and crunchy roasted fox nuts seasoned with flavorful spices.",
    inStock: true,
  },
  {
    id: 6,
    title: "Masala Cashews",
    name: "Masala Cashews",
    category: "Premium Snacks",
    img: "https://images.pexels.com/photos/6730156/pexels-photo-6730156.jpeg?_gl=1*1jlnkx4*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDYyNDYkbzgkZzEkdDE3ODc4MDY5NzEkajUyJGwwJGgw",
    variants: [
      { size: "100g", price: 120 },
      { size: "250g", price: 280 },
      { size: "500g", price: 520 },
    ],
    description:
      "Premium cashews roasted with a delicious blend of Indian spices.",
    inStock: true,
  },
  {
    id: 7,
    title: "Kaju Katli",
    name: "Kaju Katli",
    category: "Indian Sweets",
    img: "https://images.pexels.com/photos/18488310/pexels-photo-18488310.jpeg?_gl=1*g6xzqq*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDYyNDYkbzgkZzEkdDE3ODc4MDczOTgkajM1JGwwJGgw",
    variants: [
      { size: "250g", price: 220 },
      { size: "500g", price: 420 },
      { size: "1kg", price: 800 },
    ],
    description:
      "Delicate diamond-shaped cashew fudge with a smooth, melt-in-the-mouth texture.",
    inStock: true,
  },
  {
    id: 8,
    title: "Motichoor Ladoo",
    name: "Motichoor Ladoo",
    category: "Indian Sweets",
    img: "https://images.pexels.com/photos/14774070/pexels-photo-14774070.jpeg?_gl=1*u7zhex*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDk0OTckbzkkZzEkdDE3ODc4MDk0OTgkajU5JGwwJGgw",
    variants: [
      { size: "250g", price: 140 },
      { size: "500g", price: 270 },
      { size: "1kg", price: 520 },
    ],
    description:
      "Soft and delicate ladoos made from tiny gram flour pearls, flavored with cardamom.",
    inStock: true,
  },
  {
    id: 9,
    title: "Peda",
    name: "Milk Peda",
    category: "Indian Sweets",
    img: "https://images.pexels.com/photos/9672994/pexels-photo-9672994.jpeg?_gl=1*3vmy91*_ga*MTE3OTEzNjkxMS4xNzg2NTE1NTg1*_ga_8JE65Q40S6*czE3ODc4MDk0OTckbzkkZzEkdDE3ODc4MDk1NzEkajUzJGwwJGgw",
    variants: [
      { size: "250g", price: 130 },
      { size: "500g", price: 250 },
      { size: "1kg", price: 480 },
    ],
    description:
      "Rich and creamy milk-based sweet flavored with cardamom and saffron.",
    inStock: true,
  },
];

export default products;
