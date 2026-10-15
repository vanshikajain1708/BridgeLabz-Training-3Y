// Q2. Multi-Type Data Summary

const userName = "Vanshika";
const age = 20;
const isStudent = true;
const skills = ["HTML", "CSS", "JavaScript"];
const profile = { college: "GLA University", course: "B.Tech CSE" };
const middleName = null;
let phoneNumber; // undefined

// typeof gives "object" for arrays and null, so handle them separately
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const report = [
  { Label: "userName", Value: userName, Type: getType(userName) },
  { Label: "age", Value: age, Type: getType(age) },
  { Label: "isStudent", Value: isStudent, Type: getType(isStudent) },
  { Label: "skills", Value: JSON.stringify(skills), Type: getType(skills) },
  { Label: "profile", Value: JSON.stringify(profile), Type: getType(profile) },
  { Label: "middleName", Value: middleName, Type: getType(middleName) },
  { Label: "phoneNumber", Value: phoneNumber, Type: getType(phoneNumber) },
];

// One console.table() for the whole report
console.table(report);