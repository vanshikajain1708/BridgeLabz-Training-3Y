// Q10. Nested Hoisting and Closures

// ---------- Part 1: original code ----------
function outer() {
  console.log(count); // undefined, outer's own "var count" is hoisted
  var count = 5;
  function inner() {
    console.log(count); // undefined, inner's own "var count" is hoisted (it shadows outer's count)
    var count = 10;
  }
  inner();
}
outer();
// Prediction: undefined, undefined
//
// ---------- Part 2: separate memory contexts ----------
// outer() creates its own execution context:  { count: undefined, inner: function }
// inner() creates a separate context:         { count: undefined }
// Each "var count" is hoisted to the top of its OWN function, so inner never
// reaches outer's count (5) because it already finds its own count (undefined).

// If inner has no var count of its own, it uses the closure and sees outer's value
function outerClosure() {
  var count = 5;
  function inner() {
    console.log(`Closure -> inner sees outer count: ${count}`); // 5
  }
  inner();
}
outerClosure();

// ---------- Part 3: inner as an arrow function ----------
function outerArrow() {
  console.log(count); // undefined
  var count = 5;
  const inner = () => {
    console.log(count); // still undefined: the arrow's own var count is hoisted inside it
    var count = 10;
  };
  inner();

  // Difference: the arrow is a const, so it is NOT hoisted like a declaration.
  // Calling it before the line would give a ReferenceError (TDZ).
}
outerArrow();

// Arrow functions also have no own "this" or "arguments", they use the outer ones.

// ---------- Part 4: debug session ----------
function outerDebug() {
  debugger; // 1. Step into outerDebug and watch "count" in the WATCH panel
  var count = 5;
  function inner() {
    debugger; // 2. Check the CALL STACK: inner <- outerDebug <- global
    var count = 10;
    console.log(`inner count: ${count}`);
  }
  inner();
  console.log(`outer count: ${count}`); // 5, unchanged by inner
}
outerDebug();