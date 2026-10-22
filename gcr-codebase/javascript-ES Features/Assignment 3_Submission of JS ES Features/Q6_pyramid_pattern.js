"use strict";

// Q6. Pyramid Pattern Generator

// Outer loop limit from user input: node Q6_pyramid_pattern.js 6 (default = 5)
const userInput = parseInt(process.argv[2], 10);
const rows = Number.isNaN(userInput) || userInput < 1 ? 5 : userInput;

// ---------- Version 1: with let ----------
function pyramidLet(limit) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

console.log(`--- Pyramid with let (rows = ${rows}) ---`);
pyramidLet(rows);

// ---------- Version 2: with var ----------
function pyramidVar(limit) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
  // Observation: output is the same, but var is function scoped,
  // so i and j are still alive after the loops end.
  console.log(`After loop with var -> i: ${i}, j: ${j}`);
}

console.log("\n--- Pyramid with var ---");
pyramidVar(rows);

// Debug step-by-step: put a breakpoint inside the inner loop and watch i, j and line.
// With var, the same i/j are re-used (no new copy per iteration).
// With let, each iteration gets a fresh binding. Closures show this clearly:
const withVar = [];
const withLet = [];
for (var a = 0; a < 3; a++) withVar.push(() => a);
for (let b = 0; b < 3; b++) withLet.push(() => b);
console.log("\nvar closures:", withVar.map((fn) => fn())); // [3, 3, 3]
console.log("let closures:", withLet.map((fn) => fn())); // [0, 1, 2]

// ---------- Strict mode catches undeclared loop variables ----------
try {
  for (k = 1; k <= 3; k++) {
    // k was never declared
  }
} catch (error) {
  console.log(`\nStrict mode error: ${error.name} - ${error.message}`);
}