// Q4. DevOps Delay: Async Timeout Race

// Chance (0 to 1) that a server fails. Use 0 to always succeed, 1 to always fail.
const FAILURE_CHANCE = 0.1;

// Simulates a deployment server that responds after a delay
function deployToServer(serverName, delayInMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(`${serverName} failed to respond`));
      } else {
        resolve(`${serverName} responded after ${delayInMs / 1000}s`);
      }
    }, delayInMs);
  });
}

// Both servers start at the same time
const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

// Promise.race(): settles as soon as the FIRST promise settles
Promise.race([serverA, serverB])
  .then((firstResponse) => {
    console.log("Fastest response:", firstResponse);
  })
  .catch((error) => {
    console.log(`Race failed: ${error.message}`);
  });

// Promise.all(): waits for ALL promises (or fails as soon as one fails)
Promise.all([serverA, serverB])
  .then((responses) => {
    console.log("Deployment completed for all servers");
    console.log(responses);
  })
  .catch((error) => {
    console.log(`Deployment failed: ${error.message}`);
  });