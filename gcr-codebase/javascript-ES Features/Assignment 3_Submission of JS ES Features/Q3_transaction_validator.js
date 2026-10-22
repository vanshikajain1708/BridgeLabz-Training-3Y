"use strict";

// Q3. Transaction Validator

const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];

// Custom error classes
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}
class MissingFieldError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingFieldError";
  }
}
class NullEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullEntryError";
  }
}

function validateTransaction(transaction) {
  // Null check must come first, otherwise transaction.id would crash
  if (transaction === null) {
    throw new NullEntryError("Transaction entry is null");
  }
  if (transaction.id === undefined || transaction.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount in ${JSON.stringify(transaction)}`);
  }
  if (transaction.amount < 0) {
    throw new NegativeAmountError(`Negative amount (${transaction.amount}) for id ${transaction.id}`);
  }
  return true;
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const current = transactions[i];

  // Breakpoint: in VS Code, watch i, current, valid and invalid here
  debugger;

  try {
    validateTransaction(current);
    valid.push(current);
  } catch (error) {
    invalid.push({ index: i, type: error.name, message: error.message });
  }
}

console.log("===== Transaction Report =====");
console.log(`Successful transactions: ${valid.length}`);
console.log(`Failed transactions    : ${invalid.length}`);
console.log("Valid  :", valid);
console.log("Invalid:");
for (const item of invalid) {
  console.log(`  #${item.index} ${item.type}: ${item.message}`);
}