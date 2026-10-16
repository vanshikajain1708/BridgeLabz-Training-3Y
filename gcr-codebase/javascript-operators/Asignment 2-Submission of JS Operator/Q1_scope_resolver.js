// Q1. Scope Conflict Resolver

// Global variable (accessible everywhere)
var bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variables (exist only inside this function)
  let salary = 40000;

  // Add the global bonus only if the employee is permanent
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`isPermanent: ${isPermanent} -> Total salary: ${salary}`);
}

// Changing isPermanent changes only the local result
calculateSalary(true);
calculateSalary(false);

// The global bonus is never modified by the function
console.log(`Global bonus after both calls: ${bonus}`);

// Local variables are not accessible outside the function
console.log(typeof salary); // "undefined"