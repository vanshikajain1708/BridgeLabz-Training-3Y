// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words by splitting the string on spaces
const wordCount = feedback.split(" ").length;

// Convert to lowercase so "Bad" or "POOR" are also detected
const lowerFeedback = feedback.toLowerCase();
const hasNegativeWords = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback   : "${feedback}"`);
console.log(`Word Count : ${wordCount}`);

if (!hasNegativeWords) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}