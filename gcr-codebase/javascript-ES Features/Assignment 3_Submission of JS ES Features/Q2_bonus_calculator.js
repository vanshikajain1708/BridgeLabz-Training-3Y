"use strict";

// Q2. Employee Bonus Calculator

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

// Extra test records to show the try...catch working
const testRecords = [
  ...employees,
  { name: "Ravi", years: "4" }, // salary property missing
  { name: "Neha", salary: "abc", years: "3" }, // salary cannot be converted
];

function calculateBonus(employee) {
  // Missing property check
  if (employee.salary === undefined || employee.years === undefined) {
    throw new Error(`Missing property for ${employee.name}`);
  }

  // Convert strings to numbers
  const salary = Number(employee.salary);
  const years = Number(employee.years);

  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Conversion failed for ${employee.name}`);
  }

  // 10% bonus if years > 3, otherwise 5%
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: employee.name, salary, years, bonus };
}

for (const emp of testRecords) {
  try {
    const result = calculateBonus(emp);
    console.log(
      `Name: ${result.name} | Salary: ${result.salary} | Years: ${result.years} | Bonus: ${result.bonus.toFixed(2)}`
    );
  } catch (error) {
    console.log(`Error (${error.name}): ${error.message}`);
  }
}