// Q5. Hoisting Lab: The Sequence Trap

// ---------- Part 1: original code (prediction) ----------
// Memory state before execution (creation phase):
//   score      -> var, hoisted, value = undefined
//   announce   -> function declaration, hoisted completely (can be called early)
//   status     -> let, hoisted but in Temporal Dead Zone until its line runs
//   startGame  -> function declaration, hoisted completely
console.log(score); // undefined (var exists but has no value yet)
announce(); // "Game started"
var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
startGame(); // works because status is initialised before this call
function startGame() {
  console.log(status);
}

// ---------- Part 2: where the trap actually breaks ----------
// If startGame() were called BEFORE the let line, status would be in the TDZ.
function startEarly() {
  try {
    console.log(lateStatus);
  } catch (error) {
    console.log(`TDZ error: ${error.name} - ${error.message}`);
  }
}
startEarly();
let lateStatus = "ready";

// ---------- Part 3: fixed version (declare first, then use) ----------
let fixedScore = 50;
let fixedStatus = "ready";

function announceFixed() {
  console.log("Game started");
}
function startGameFixed() {
  console.log(fixedStatus);
}

console.log(fixedScore); // 50
announceFixed();
startGameFixed();

// ---------- Part 4: arrow function comparison ----------
// Arrow functions stored in const/let are NOT hoisted like declarations.
try {
  announceArrow(); // const is in the TDZ here
} catch (error) {
  console.log(`Arrow (const) before declaration: ${error.name} - ${error.message}`);
}
const announceArrow = () => console.log("Game started (arrow)");
announceArrow(); // works only after the declaration

// With var, the variable is hoisted as undefined, so calling it gives a TypeError
try {
  announceVar();
} catch (error) {
  console.log(`Arrow (var) before declaration: ${error.name} - ${error.message}`);
}
var announceVar = () => console.log("Game started (var arrow)");
announceVar();