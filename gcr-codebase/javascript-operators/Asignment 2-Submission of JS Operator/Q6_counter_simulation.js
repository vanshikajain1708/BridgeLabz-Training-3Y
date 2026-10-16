// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
  count++;

  // Nested function can access and use count from the outer scope
  function logCount() {
    console.log(`Count increased to: ${count}`);
  }
  logCount();
}

function decrement() {
  count--;

  function logCount() {
    console.log(`Count decreased to: ${count}`);
  }
  logCount();
}

// Simulating click events manually
console.log("Initial count:", count);
increment(); // click +
increment(); // click +
increment(); // click +
decrement(); // click -
decrement(); // click -
console.log("Final count:", count);