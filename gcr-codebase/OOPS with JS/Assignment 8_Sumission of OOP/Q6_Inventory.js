const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Phone", category: "Electronics", price: 25000, stock: 15 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 700, stock: 4 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1800, stock: 30 },
  { id: 5, name: "Notebook", category: "Stationery", price: 60, stock: 100 },
  { id: 6, name: "Pen", category: "Stationery", price: 10, stock: 8 },
];

function getLowStockProducts(items, limit = 10) {
  return items.filter((p) => p.stock < limit);
}

function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}

console.log("Low Stock Products:", getLowStockProducts(products));
console.log("Sorted By Price:", sortProductsByPrice(products));
console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Grouped By Category:", JSON.stringify(groupByCategory(products), null, 2));