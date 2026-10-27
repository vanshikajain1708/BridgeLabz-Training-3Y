// Q9. Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  // Total = sum of price x quantity for every item
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Coupon must look like SAVE20 or DISC10 (SAVE/DISC followed by 2 digits)
  applyCoupon(code) {
    const couponPattern = /^(SAVE|DISC)(\d{2})$/;
    const match = code.trim().toUpperCase().match(couponPattern);

    if (!match) {
      this.discountPercent = 0;
      console.log(`Invalid coupon: "${code}". Use a format like SAVE20 or DISC10.`);
      return false;
    }

    this.discountPercent = Number(match[2]); // the digits are the discount %
    console.log(`Coupon "${match[0]}" applied: ${this.discountPercent}% off`);
    return true;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }

  showSummary() {
    console.log("----- Cart Summary -----");
    this.items.forEach((item) => {
      console.log(`${item.name.padEnd(12)} Rs. ${item.price} x ${item.quantity} = Rs. ${item.price * item.quantity}`);
    });
    console.log(`Total        : Rs. ${this.getTotal().toFixed(2)}`);
    console.log(`Discount     : ${this.discountPercent}%`);
    console.log(`Final Total  : Rs. ${this.getFinalTotal().toFixed(2)}`);
    console.log("------------------------");
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 150, 3);

// Test 1: valid coupon
cart.applyCoupon("SAVE20");
cart.showSummary();

// Test 2: another valid coupon
cart.applyCoupon("DISC10");
cart.showSummary();

// Test 3: invalid coupons
cart.applyCoupon("SAVE5");
cart.applyCoupon("OFFER50");
cart.showSummary();