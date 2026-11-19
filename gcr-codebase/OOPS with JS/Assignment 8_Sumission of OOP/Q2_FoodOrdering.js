const menu = [
  { item: "Pizza", price: 250 },
  { item: "Burger", price: 120 },
  { item: "Pasta", price: 180 },
  { item: "Coke", price: 60 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((name) => {
    const found = menu.find((m) => m.item.toLowerCase() === name.toLowerCase());
    if (!found) {
      throw new Error(`Invalid item ordered: "${name}" is not on the menu`);
    }
    return found.price;
  });

  return prices.reduce((total, p) => total + p, 0);
}

try {
  console.log("Total Bill:", calculateBill(["Pizza", "Coke", "Burger"]));
  console.log("Total Bill:", calculateBill(["Pasta", "Sandwich"]));
} catch (error) {
  console.log("Error:", error.message);
}