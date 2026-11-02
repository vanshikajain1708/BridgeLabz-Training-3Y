// Q2. Task Scheduler: Micro vs Macro Challenge

console.log("Start"); // 1. synchronous

// Macrotask: goes to the macrotask (timer) queue
setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

// Microtask: goes to the microtask queue
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Synchronous log"); // 2. synchronous

console.log("End"); // 3. synchronous

// Output order:
// Start
// Synchronous log
// End
// Microtask: Promise.then callback
// Macrotask: setTimeout callback
//
// Why do microtasks run before macrotasks?
// 1. JavaScript first runs all the synchronous code on the call stack (Start, Synchronous log, End).
// 2. When the call stack is empty, the event loop FIRST empties the microtask queue
//    (Promise callbacks, queueMicrotask). It does not move on until this queue is completely empty.
// 3. Only after that does the event loop take ONE macrotask (setTimeout, setInterval, I/O)
//    from the macrotask queue, and then again checks the microtask queue.
// 4. So even though setTimeout has a 0 ms delay, its callback is a macrotask and has to wait
//    for the microtask (Promise.then) to run first.