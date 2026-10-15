// Q8. Employee Salary Projection

let currentSalary = 40000;
const incrementRate = 8; // in %

const projection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;
  projection.push({
    Year: year,
    Salary: Math.round(currentSalary),
  });
}

console.table(projection);