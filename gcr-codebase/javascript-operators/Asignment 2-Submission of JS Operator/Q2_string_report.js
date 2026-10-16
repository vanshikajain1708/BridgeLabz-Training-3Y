// Q2. String Manipulation Report

const productName = "  wireless headphones PRO  ";

// Step 1: remove extra spaces and convert to lowercase
const cleaned = productName.trim().toLowerCase();

// Step 2: replace "pro" with "Pro Edition"
const replaced = cleaned.replace(/\bpro\b/, "Pro Edition");

// Step 3: capitalize the first letter of each word
const finalTitle = replaced
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Original Title : "${productName}"`);
console.log(`Cleaned Title  : "${finalTitle}"`);
console.log(`Title Length   : ${finalTitle.length}`);