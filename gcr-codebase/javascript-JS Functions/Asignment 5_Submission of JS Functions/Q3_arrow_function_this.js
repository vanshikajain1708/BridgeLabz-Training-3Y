// Q3. Arrow function vs normal function: the value of "this"

// ---------- Problem: arrow function as a method ----------
const userWithArrow = {
  name: "Vanshika",
  showName: () => {
    console.log(`Arrow function -> this.name: ${this.name}`);
  },
};

userWithArrow.showName(); // undefined

// Why is this.name undefined?
// An arrow function does NOT have its own "this". It uses the "this" of the place
// where it was written (lexical this). Here that place is the top level of the file,
// not the userWithArrow object. At the top level of a Node.js file "this" is an
// empty object {} (in a browser it is window), so this.name is undefined.
// (Object literal curly braces { } do not create a new "this".)
console.log("Top-level this:", this); // {} in Node.js

// ---------- Fix: normal function ----------
const userWithFunction = {
  name: "Vanshika",
  showName: function () {
    console.log(`Normal function -> this.name: ${this.name}`);
  },
};

userWithFunction.showName(); // Vanshika

// A normal function gets "this" from how it is called.
// userWithFunction.showName() -> "this" is the object before the dot.

// Shorter method syntax also works the same way:
const userShort = {
  name: "Vanshika",
  showName() {
    console.log(`Method shorthand -> this.name: ${this.name}`);
  },
};

userShort.showName(); // Vanshika