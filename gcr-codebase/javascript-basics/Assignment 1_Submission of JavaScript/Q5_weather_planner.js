// Q5. Weather Activity Planner

const temperature = 28;
const isRaining = false;
const windSpeed = 12;

if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
  console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  console.log("Too cold and windy — stay home.");
} else {
  console.log("Perfect day for a walk.");
}