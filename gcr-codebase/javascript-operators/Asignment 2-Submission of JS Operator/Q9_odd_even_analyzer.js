// Q9. Odd-Even Number Analyzer

const numbers = [];
const results = [];

// Accept numbers 1 to 30 in an array using a loop
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Classify each number
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log("Numbers :", numbers);
console.log("Results :", results);