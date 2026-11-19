class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department} department.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} team.`;
  }
}

const emp = new Employee("Rahul", "IT");
const mgr = new Manager("Neha", "HR");

// Runtime polymorphism
const staff = [emp, mgr];
staff.forEach((person) => console.log(person.work()));