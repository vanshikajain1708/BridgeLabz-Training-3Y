// Q1. Callback: greetUser(name, callback)

// This function runs after greetUser finishes its own work
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser prints the greeting first, then calls the callback it received
function greetUser(name, callback) {
  console.log(`Hello ${name}`); // step 1
  callback(); // step 2: callback is executed after the greeting
}

console.log("Start");
greetUser("Vanshika", showEndMessage); // pass the function itself (no brackets)
console.log("End");

// Flow: Start -> Hello Vanshika -> Welcome to the course! -> End