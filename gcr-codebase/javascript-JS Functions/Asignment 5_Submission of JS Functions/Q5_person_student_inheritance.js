// Q5. Person and Student constructors with prototype inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // run Person constructor to set this.name
  this.branch = branch;
}

// Link prototypes: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore the constructor reference

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

Student.prototype.printDetails = function () {
  this.printName(); // inherited from Person.prototype
  this.printBranch(); // from Student.prototype
};

const student = new Student("Vanshika", "CSE");
student.printDetails();

// ---------- Prototype chain demonstration ----------
console.log("\n--- Prototype chain ---");
console.log("student instanceof Student:", student instanceof Student); // true
console.log("student instanceof Person :", student instanceof Person); // true
console.log("Chain 1:", Object.getPrototypeOf(student) === Student.prototype); // true
console.log("Chain 2:", Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
console.log("Chain 3:", Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log("printName is own property of student?", student.hasOwnProperty("printName")); // false (found up the chain)