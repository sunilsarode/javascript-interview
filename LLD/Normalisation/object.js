cart_items = [
  { id: 1, name: "T-Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Headphones", price: 50, quantity: 1 },
  { id: 1, name: "T-Shirt", price: 20, quantity: 1 }, // Duplicate entry!
];

//Normalise version
products = {
  1: { name: "T-Shirt", price: 20 },
  2: { name: "Headphones", price: 50 },
};

cart = {
  items: { 1: 2, 2: 1 }, // Item ID as key, quantity as value
};

Object.entries(products).forEach(([key, value]) => {
  console.log(key, value);
});

Object.keys(cart.items).forEach((key) => {
  console.log(key, cart.items[key]);
});

posts = [
  {
    id: 1,
    content: "This is a post",
    author: { name: "Alice", author_id: 1 }, // Added author_id
    comments: [
      { content: "Cool post!", author: { name: "Bob" }, comment_id: 1 }, // Added comment_id
      { content: "Great!", author: { name: "Charlie" }, comment_id: 2 }, // Added comment_id
    ],
  },
];

auhtor = {
  1: { name: "Alice" },
  2: { name: "Bob" },
  3: { name: "Charlie" },
};
comments = {
  1: {
    content: "Cool post!",
    author_id: 2,
  },
  2: {
    content: "Great!",
    author_id: 3,
  },
};
post = {
  1: {
    content: "This is a post",
    author_id: 1,
    comments: [1, 2],
  },
};
