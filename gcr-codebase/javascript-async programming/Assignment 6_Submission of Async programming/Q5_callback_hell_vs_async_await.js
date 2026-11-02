// Q5. Frontend Rush: Avoiding Callback Hell

// ================= Part 1: Callback hell =================
// Each stage takes 1 second and then calls the next stage inside its callback.
function stageWithCallback(stageName, callback) {
  setTimeout(() => {
    console.log(`[Callbacks] ${stageName}`);
    callback();
  }, 1000);
}

function runWithCallbacks(onFinish) {
  console.log("--- Callback version (nested callbacks) ---");
  stageWithCallback("Design", () => {
    stageWithCallback("Build", () => {
      stageWithCallback("Test", () => {
        stageWithCallback("Deploy", () => {
          stageWithCallback("Celebrate", () => {
            onFinish(); // the pyramid of doom ends here
          });
        });
      });
    });
  });
}

// ================= Part 2: async/await =================
function stageWithPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[Async/Await] ${stageName}`);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("\n--- async/await version ---");
  await stageWithPromise("Design");
  await stageWithPromise("Build");
  await stageWithPromise("Test");
  await stageWithPromise("Deploy");
  await stageWithPromise("Celebrate");
  console.log("Pipeline finished!");
}

// Run the callback version first, then the async/await version
runWithCallbacks(runWithAsyncAwait);

// Why async/await is more readable:
// 1. The code is flat and reads top to bottom like normal synchronous code,
//    instead of growing deeper to the right with every stage (callback hell).
// 2. Adding, removing or reordering a stage is just adding or moving one line.
// 3. Error handling is simple: one try/catch can cover every stage,
//    whereas callbacks need error checks inside each nested level.