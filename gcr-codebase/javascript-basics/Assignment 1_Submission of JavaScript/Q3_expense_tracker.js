// Q3. Monthly Expense Tracker

const expenses = [
  { category: "Food", amount: 4500 },
  { category: "Travel", amount: 2000 },
  { category: "Rent", amount: 8000 },
  { category: "Bills", amount: 1800 },
  { category: "Leisure", amount: 1500 },
];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i].amount;
}

const average = total / expenses.length;

// Add 10% tax
let finalAmount = total;
finalAmount += total * 0.1;

console.log("Total Expense          : " + total.toFixed(2));
console.log("Average Expense        : " + average.toFixed(2));
console.log("Final Amount (+10% tax): " + finalAmount.toFixed(2));