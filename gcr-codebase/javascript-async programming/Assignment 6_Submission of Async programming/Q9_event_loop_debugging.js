// Q9. Debugging the Event Loop

// ---------- Prediction (written BEFORE running) ----------
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// ---------- Actual output ----------
// Script start
// Script end
// Promise callback
// Timeout callback
//
// The actual output matches the prediction.
//
// ---------- Explanation ----------
// 1. "Script start" and "Script end" are synchronous, so they run first on the call stack.
// 2. setTimeout(..., 0) hands the callback to the timer, and when the time is over it goes
//    to the MACROTASK queue.
// 3. Promise.resolve().then(...) puts its callback in the MICROTASK queue immediately.
// 4. When the call stack is empty, the event loop always empties the microtask queue
//    first ("Promise callback"), and only then picks the next macrotask ("Timeout callback").
//    That is why a Promise runs before setTimeout, even with a 0 ms delay.