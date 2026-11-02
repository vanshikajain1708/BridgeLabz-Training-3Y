// Q3. Bug Tracker: Callback to Promise Migration

// ---------- Original callback-based function ----------
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// ---------- New Promise-based version ----------
// Wraps the old callback function inside a Promise
function getBugs(simulateFailure) {
  return new Promise((resolve, reject) => {
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API request failed: could not fetch bugs"));
      } else {
        resolve(bugs);
      }
    });
  });
}

// Random API failure using a boolean (about 30% chance of failure)
const simulateApiFailure = Math.random() < 0.3;
console.log(`Simulating API failure: ${simulateApiFailure}`);
console.log("Fetching bugs...");

getBugs(simulateApiFailure)
  .then((bugs) => {
    // Log all bugs neatly in a table
    const bugTable = bugs.map((bug, index) => ({ ID: index + 1, Bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });