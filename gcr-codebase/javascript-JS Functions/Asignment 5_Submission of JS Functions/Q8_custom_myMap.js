// Q8. Custom prototype method myMap() for all arrays

// Must be a normal function (not an arrow) so that "this" is the array
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Same arguments as built-in map: (element, index, array)
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2)); // [2, 4, 6]
console.log(["a", "b", "c"].myMap((letter, index) => `${index}-${letter}`)); // [ '0-a', '1-b', '2-c' ]

// Compare with the built-in map()
const numbers = [10, 20, 30];
console.log("myMap :", numbers.myMap((n) => n + 1));
console.log("map   :", numbers.map((n) => n + 1));
console.log("Same result?", JSON.stringify(numbers.myMap((n) => n + 1)) === JSON.stringify(numbers.map((n) => n + 1))); // true