// Q1. The Startup Morning: Async Coffee Maker

// Chance (0 to 1) that a step fails. Use 0 to always succeed, 1 to always fail.
const FAILURE_CHANCE = 0.1;

// Random delay between 1 and 2 seconds (in milliseconds)
function randomDelay() {
  return 1000 + Math.random() * 1000;
}

// Step 1: boil water
function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Boiling water...");
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error("The kettle stopped working"));
      } else {
        resolve("Water boiled");
      }
    }, randomDelay());
  });
}

// Step 2: brew coffee
function brewCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Brewing coffee...");
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error("The coffee machine jammed"));
      } else {
        resolve("Coffee brewed");
      }
    }, randomDelay());
  });
}

// Step 3: pour into a cup
function pourIntoCup() {
  return new Promise((resolve, reject) => {
    console.log("Step 3: Pouring into a cup...");
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error("The cup slipped and broke"));
      } else {
        resolve("Coffee poured");
      }
    }, randomDelay());
  });
}

console.log("Starting the coffee process...");

// Promise chaining: each .then() waits for the previous step and returns the next Promise
boilWater()
  .then((result) => {
    console.log(`Done: ${result}`);
    return brewCoffee();
  })
  .then((result) => {
    console.log(`Done: ${result}`);
    return pourIntoCup();
  })
  .then((result) => {
    console.log(`Done: ${result}`);
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    // Any rejected step skips the remaining .then() calls and lands here
    console.log(`Coffee process failed: ${error.message}`);
  })
  .finally(() => {
    console.log("Coffee process finished.");
  });