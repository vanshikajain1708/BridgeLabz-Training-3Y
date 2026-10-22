"use strict";

// Q9. JSON Audit

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  try {
    // Debug: step through this line. If JSON.parse fails, control jumps straight to catch.
    const parsed = JSON.parse(rawData[i]);

    // Detect missing keys
    if (parsed.user === undefined || parsed.age === undefined) {
      throw new Error(`Missing key(s): ${parsed.user === undefined ? "user " : ""}${parsed.age === undefined ? "age" : ""}`.trim());
    }

    cleanData.push(parsed);
  } catch (error) {
    // Invalid JSON gives SyntaxError, missing keys give our custom Error
    errors.push(`Line ${lineNumber}: ${error.name} - ${error.message}`);
  }
}

console.log("Clean entries:", cleanData);
console.log("Errors:");
errors.forEach((e) => console.log("  " + e));

// ---------- Bonus: convert age to Number and filter under-18 users ----------
const adults = cleanData
  .map((entry) => ({ user: entry.user, age: Number(entry.age) }))
  .filter((entry) => entry.age >= 18);

console.log("Adult users (age converted to Number):", adults);