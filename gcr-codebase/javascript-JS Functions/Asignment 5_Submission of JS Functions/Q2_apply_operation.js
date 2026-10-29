// Q2. Callback with arrays: applyOperation(numbers, operation)

// Takes an array and a callback, applies the callback to every number
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

// Callback functions
const double = (num) => num * 2;
const square = (num) => num * num;

const numbers = [1, 2, 3, 4];

console.log("Original :", numbers);
console.log("Doubled  :", applyOperation(numbers, double)); // [2, 4, 6, 8]
console.log("Squared  :", applyOperation(numbers, square)); // [1, 4, 9, 16]

// A callback can also be written inline
console.log("Plus 10  :", applyOperation(numbers, (num) => num + 10)); // [11, 12, 13, 14]