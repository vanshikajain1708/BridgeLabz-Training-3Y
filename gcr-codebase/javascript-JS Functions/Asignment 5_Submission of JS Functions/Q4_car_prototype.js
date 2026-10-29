// Q4. Constructor function with a prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Method added to the prototype: stored only once and shared by all Car objects
Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();

// Proof of method sharing via prototype
console.log("Same method shared?", car1.getDetails === car2.getDetails); // true
console.log("getDetails is own property of car1?", car1.hasOwnProperty("getDetails")); // false
console.log("getDetails is on Car.prototype?", Car.prototype.hasOwnProperty("getDetails")); // true
console.log("car1 prototype is Car.prototype?", Object.getPrototypeOf(car1) === Car.prototype); // true