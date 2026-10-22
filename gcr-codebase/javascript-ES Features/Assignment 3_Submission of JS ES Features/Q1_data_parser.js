"use strict";

// Q1. Dynamic Data Parser

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = []; // clean numeric data
const invalidValues = []; // values that cannot be used as numbers

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  // Debug observation: Boolean("false") is true, because any non-empty string is truthy
  const numberForm = Number(value); // Number(null) = 0, Number(undefined) = NaN, Number(" ") = 0
  const booleanForm = Boolean(value);
  const stringForm = String(value);

  // Number(" ") gives 0 and Number(null) gives 0, so they need separate checks
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isMissing = value === null || value === undefined;
  const isValid = !isBlankString && !isMissing && !Number.isNaN(numberForm);

  // Conditional formatting for the report
  const label = JSON.stringify(value) === undefined ? "undefined" : JSON.stringify(value);
  if (isValid) {
    validNumbers.push(numberForm);
    console.log(`[${i}] OK   | raw: ${label} | Number: ${numberForm} | Boolean: ${booleanForm} | String: "${stringForm}"`);
  } else {
    let reason = "not a number";
    if (isMissing) reason = "missing value (null/undefined)";
    else if (isBlankString) reason = "blank string";
    invalidValues.push({ index: i, value: label, reason });
    console.log(`[${i}] SKIP | raw: ${label} | Number: ${numberForm} | Boolean: ${booleanForm} | String: "${stringForm}" | reason: ${reason}`);
  }
}

console.log("\n===== Final Report =====");
console.log("Valid numeric data :", validNumbers);
console.log("Invalid entries    :", invalidValues.length);
for (const item of invalidValues) {
  console.log(`  index ${item.index} -> ${item.value} (${item.reason})`);
}