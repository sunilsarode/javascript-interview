
let arr=[1,2,3,4,5];

let ans=arr.reduce((acc,sum)=>acc+sum,1);

console.log(ans);

const orders = [
    { id: 1, product: "Laptop", price: 1200, quantity: 2 },
    { id: 2, product: "Phone", price: 800, quantity: 1 },
    { id: 3, product: "Laptop", price: 1200, quantity: 1 },
    { id: 4, product: "Tablet", price: 600, quantity: 3 },
    { id: 5, product: "Phone", price: 800, quantity: 2 }
  ];
  

const summary = orders.reduce((acc, order) => {
    // Track total revenue
    acc.totalRevenue += order.price * order.quantity;
  
    // Track number of unique products
    if (!acc.uniqueProducts.has(order.product)) {
      acc.uniqueProducts.add(order.product);
    }
  
    // Track quantity of each product sold
    acc.productQuantities[order.product] = (acc.productQuantities[order.product] || 0) + order.quantity;
  
    // Track total number of orders
    acc.totalOrders++;
  
    return acc;
  }, {
    totalRevenue: 0,
    uniqueProducts: new Set(),
    productQuantities: {},
    totalOrders: 0
  });
  
  // Convert the Set to an array for better readability
  summary.uniqueProducts = Array.from(summary.uniqueProducts);
  
  console.log(summary);
  