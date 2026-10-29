// Q7. Closure: makeMultiplier(multiplier)

function makeMultiplier(multiplier) {
  // The returned function "remembers" the multiplier variable
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5)); // 15
console.log(double(5)); // 10
console.log(triple(10)); // 30

// How the closure works:
// 1. makeMultiplier(3) runs, creating a local variable multiplier = 3.
// 2. It returns an inner function and then finishes executing.
// 3. Normally multiplier would disappear after the function ends, but the inner
//    function still uses it, so JavaScript keeps it alive in memory.
// 4. This "inner function + the variables it remembers" is called a closure.
// 5. double and triple each have their own separate multiplier (2 and 3).