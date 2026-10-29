// Q6. Prototype chain: Person -> Faculty -> Professor

// ----- Person -----
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}.`);
};

// ----- Faculty (inherits from Person) -----
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

// ----- Professor (inherits from Faculty) -----
function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log(`I teach ${this.subject}.`);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

// A Professor object can use methods from every level of the chain
prof.introduce(); // from Person.prototype
prof.showDepartment(); // from Faculty.prototype
prof.teach(); // from Professor.prototype

// ----- Prototype chain check -----
console.log("\n--- Chain ---");
console.log("prof instanceof Professor:", prof instanceof Professor); // true
console.log("prof instanceof Faculty  :", prof instanceof Faculty); // true
console.log("prof instanceof Person   :", prof instanceof Person); // true
console.log("Professor.prototype -> Faculty.prototype:", Object.getPrototypeOf(Professor.prototype) === Faculty.prototype);
console.log("Faculty.prototype -> Person.prototype   :", Object.getPrototypeOf(Faculty.prototype) === Person.prototype);