// Q10. The Final Delivery: Async Pipeline Debugger

// Chance (0 to 1) that a step fails. Use 0 to always succeed, 1 to always fail.
const FAILURE_CHANCE = 0.1;

// Creates a step: returns a Promise that settles after a random 1-2 second delay.
// The function returns immediately; the result arrives later, when the timer fires
// and the event loop runs the callback.
function createStep(successMessage, errorMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(errorMessage));
      } else {
        resolve(successMessage);
      }
    }, delay);
  });
}

const takeOrder = () => createStep("Order taken", "Could not take the order");
const prepare = () => createStep("Food prepared", "Kitchen could not prepare the food");
const pack = () => createStep("Package ready", "Packing failed");
const dispatch = () => createStep("Out for delivery", "No delivery partner available");
const deliver = () => createStep("Delivery completed!", "Delivery failed");

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // "await" pauses ONLY this function. The call stack is free, so the event loop can run
    // other tasks while the timer waits. When the Promise settles, the function resumes
    // from a microtask, exactly where it stopped.
    console.log("Step 1: " + (await takeOrder()));
    console.log("Step 2: " + (await prepare()));
    console.log("Step 3: " + (await pack()));
    console.log("Step 4: " + (await dispatch()));
    console.log(await deliver());
  } catch (error) {
    // A rejected Promise makes "await" throw, so the remaining steps are skipped
    console.log("Pipeline failed!");
    console.log(`Reason: ${error.message}`);
  }
}

runPipeline();

// This line runs right after runPipeline() hits its first await, BEFORE Step 1 finishes.
// It proves that the pipeline does not block the rest of the program.
console.log("(Main script finished, pipeline is running in the background)");