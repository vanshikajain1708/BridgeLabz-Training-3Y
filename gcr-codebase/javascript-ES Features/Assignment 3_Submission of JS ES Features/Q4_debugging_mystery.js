"use strict";

// Q4. Debugging Mystery

// ---------- Part 1: the buggy code ----------
function showMessage() {
  greeting = "Welcome"; // undeclared variable
  console.log(greeting);
}

try {
  showMessage();
} catch (error) {
  // Why the error? In strict mode, assigning to an undeclared variable is not
  // allowed. Without strict mode JavaScript would silently create a global variable.
  console.log(`Error: ${error.name} - ${error.message}`);
}

// ---------- Part 2: the fix ----------
function showMessageFixed() {
  // Declaring with let/const makes greeting local to this function
  const greeting = "Welcome";

  // Debugger steps:
  // 1. Put a breakpoint on the next line.
  // 2. Add "greeting" in the WATCH panel.
  // 3. Check the CALL STACK panel: showMessageFixed <- anonymous (global).
  debugger;
  console.log(greeting);
}

showMessageFixed();

// greeting is not visible outside the function (no global leak)
console.log(typeof greeting); // "undefined"