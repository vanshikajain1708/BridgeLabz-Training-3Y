// Q8. Strict Mode Showdown
// NOTE: this file has no "use strict" on top, because we need to run the code
// in both modes. Strict mode is applied inside new Function("...") below.

// ---------- Part 1: sloppy (non-strict) mode ----------
function demo(a, a) {
  // Duplicate parameter names are allowed; the last 'a' wins
  console.log(`a = ${a}`); // 10
  total = 10; // creates an implicit global variable
  console.log(`delete total -> ${delete total}`); // true, the global property is removed
}
demo(5, 10);
console.log(`typeof total after delete: ${typeof total}`); // "undefined"

// ---------- Part 2: strict mode ----------
function runStrict(label, code) {
  try {
    new Function('"use strict"; ' + code)();
    console.log(`${label}: no error`);
  } catch (error) {
    console.log(`${label}: ${error.name} - ${error.message}`);
  }
}

console.log("\n--- Strict mode results ---");
runStrict("Original demo(5, 10)", "function demo(a, a) { total = 10; delete total; } demo(5, 10);");
runStrict("Duplicate parameter", "function demo(a, a) {}");
runStrict("Undeclared assignment", "total = 10;");
runStrict("Delete a variable", "var total = 1; delete total;");

// ---------- Part 3: why these are illegal in strict mode ----------
// 1. Duplicate parameters: ambiguous, the first 'a' becomes unreachable (likely a bug).
// 2. Undeclared assignment: a typo would silently create a global variable.
// 3. delete on a variable: variables are not properties, deleting them makes no sense.

// ---------- Part 4: correct version (ES6 rules) ----------
function demoFixed(a, b) {
  "use strict";
  let total = 10; // declared properly, stays local
  const settings = { total };
  delete settings.total; // delete is only legal on object properties
  console.log(`\nFixed version -> a: ${a}, b: ${b}, total: ${total}, settings:`, settings);
}
demoFixed(5, 10);