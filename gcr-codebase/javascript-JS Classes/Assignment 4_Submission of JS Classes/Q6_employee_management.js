// Q6. Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Annual salary = monthly salary x 12
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increase the monthly salary by the given percentage
  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
  }
}

// 5 employee objects
const employees = [
  new Employee(101, "Amit", "HR", 40000),
  new Employee(102, "Sara", "Finance", 55000),
  new Employee(103, "Kiran", "Tech", 80000),
  new Employee(104, "Neha", "Support", 30000),
  new Employee(105, "Rahul", "Tech", 65000),
];

console.log("===== Annual Salary =====");
employees.forEach((emp) => {
  console.log(`${emp.id} | ${emp.name.padEnd(6)} | ${emp.department.padEnd(8)} | Annual: Rs. ${emp.getAnnualSalary()}`);
});

// Total annual payout using reduce()
const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: Rs. ${totalPayout}`);

// Apply 10% bonus to Tech employees and check again
console.log("\n===== After 10% bonus for Tech department =====");
employees
  .filter((emp) => emp.department === "Tech")
  .forEach((emp) => emp.applyBonus(10));

employees.forEach((emp) => {
  console.log(`${emp.name.padEnd(6)} | Monthly: Rs. ${emp.salary} | Annual: Rs. ${emp.getAnnualSalary()}`);
});

const newTotal = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nNew total annual payout: Rs. ${newTotal}`);