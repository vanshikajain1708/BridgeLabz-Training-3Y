// Q8. Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

// Apply category-wise discount to each item
const discountedPrices = [];

for (let i = 0; i < cart.length; i++) {
  let price = cart[i].price;

  if (cart[i].category === "electronics") {
    price = price - price * 0.1; // 10% off
  } else if (cart[i].category === "fashion") {
    price = price - price * 0.05; // 5% off
  }

  discountedPrices.push(price);
  console.log(`${cart[i].item}: ${cart[i].price} -> ${price}`);
}

// Total before any discount
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

// Total after category discounts
let finalTotal = discountedPrices.reduce((sum, price) => sum + price, 0);

// Extra 5% overall discount if the cart value is more than 50000
if (originalTotal > 50000) {
  finalTotal = finalTotal - finalTotal * 0.05;
  console.log("Extra 5% overall discount applied");
}

console.log(`Original Total : ${originalTotal}`);
console.log(`Final Total    : ${finalTotal.toFixed(2)}`);