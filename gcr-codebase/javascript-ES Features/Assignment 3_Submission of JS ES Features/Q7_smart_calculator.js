"use strict";

// Q7. Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
  num2 = 0;

// Custom errors
class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}
class NegativeRootError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeRootError";
  }
}
class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivisionByZeroError("Cannot divide by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new NegativeRootError("Cannot take square root of a negative number");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Unknown operation: ${operation}`);
  }
}

function runAll(list, a, b) {
  console.log(`--- Calculator summary (num1 = ${a}, num2 = ${b}) ---`);
  for (const op of list) {
    try {
      const result = calculate(op, a, b);
      console.log(`${op.padEnd(9)}: ${result}`);
    } catch (error) {
      console.log(`${op.padEnd(9)}: ${error.name} - ${error.message}`);
    }
  }
}

runAll(operations, num1, num2);

// Extra tests to trigger the other errors
runAll(["root", "modulus"], -16, 2);