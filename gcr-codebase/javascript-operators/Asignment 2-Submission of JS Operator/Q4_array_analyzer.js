// Q4. Array Performance Analyzer

// Create an array of 8 random scores between 30 and 100
const scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30);
}

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// reduce() to get the sum, then calculate average
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;

// filter() to get passed students (score >= 50)
const passedScores = scores.filter((score) => score >= 50);

// map() to create a pass/fail label for each score
const results = scores.map((score) => (score >= 50 ? "Pass" : "Fail"));

console.log("Scores        :", scores);
console.log("Results       :", results);
console.log(`Highest Score : ${highest}`);
console.log(`Lowest Score  : ${lowest}`);
console.log(`Average Score : ${average.toFixed(2)}`);
console.log(`Passed        : ${passedScores.length} out of ${scores.length}`);