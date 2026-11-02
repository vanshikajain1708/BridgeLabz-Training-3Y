// Q7. The Lazy Loader: Promise Combinator Practice

// Each loader can be told to fail (reject) instead of succeed
function loadProfile(shouldFail) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (shouldFail ? reject(new Error("Profile failed to load")) : resolve("Profile Loaded")), 2000)
  );
}

function loadPosts(shouldFail) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (shouldFail ? reject(new Error("Posts failed to load")) : resolve("Posts Loaded")), 1500)
  );
}

function loadMessages(shouldFail) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (shouldFail ? reject(new Error("Messages failed to load")) : resolve("Messages Loaded")), 1000)
  );
}

const moduleNames = ["Profile", "Posts", "Messages"];
const loaders = [loadProfile, loadPosts, loadMessages];

// Randomly choose ONE module that will be rejected
const failIndex = Math.floor(Math.random() * loaders.length);
console.log(`Randomly failing module: ${moduleNames[failIndex]}\n`);

const startTime = Date.now();

// Start all loaders at the same time
const promises = loaders.map((load, index) => load(index === failIndex));

// allSettled waits for ALL promises and never rejects, it reports each result
Promise.allSettled(promises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]}: SUCCESS -> ${result.value}`);
    } else {
      console.log(`${moduleNames[index]}: FAILED  -> ${result.reason.message}`);
    }
  });

  const totalTime = Date.now() - startTime;
  // Total is about 2000 ms (the slowest loader), not 4500 ms, because they run in parallel
  console.log(`\nTotal time taken: ${totalTime} ms`);
});