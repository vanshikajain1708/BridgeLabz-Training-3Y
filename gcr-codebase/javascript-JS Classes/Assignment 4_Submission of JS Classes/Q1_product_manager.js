// Q1. E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduces the price by the given percentage and returns the new price
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
    return this.price;
  }

  // Returns the product details as a formatted string
  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Category: ${this.category} | Price: Rs. ${this.price.toFixed(2)}`;
  }
}

// Multiple product objects stored in an array
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Headphones", 1500, "Electronics"),
  new Product(3, "Notebook", 120, "Stationery"),
  new Product(4, "Running Shoes", 3200, "Fashion"),
  new Product(5, "Pen Set", 450, "Stationery"),
];

console.log("===== All Products =====");
products.forEach((product) => console.log(product.getDetails()));

// Apply 10% discount on one product
console.log("\n===== After 10% discount on Laptop =====");
products[0].applyDiscount(10);
console.log(products[0].getDetails());

// Display products with price > 1000 using filter
console.log("\n===== Products with price > 1000 =====");
const expensiveProducts = products.filter((product) => product.price > 1000);
expensiveProducts.forEach((product) => console.log(product.getDetails()));