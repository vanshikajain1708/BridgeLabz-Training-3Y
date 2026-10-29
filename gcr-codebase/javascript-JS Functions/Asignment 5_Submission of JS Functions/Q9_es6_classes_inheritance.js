// Q9. Person -> Student: prototype version vs ES6 class version

// ---------- Version 1: constructor functions + prototypes ----------
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
StudentProto.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

// ---------- Version 2: ES6 classes with extends and super() ----------
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // calls the Person constructor
    this.branch = branch;
  }
  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
  printDetails() {
    this.printName();
    this.printBranch();
  }
}

// ---------- Both versions behave the same ----------
console.log("--- Prototype version ---");
const s1 = new StudentProto("Vanshika", "CSE");
s1.printDetails();

console.log("\n--- Class version ---");
const s2 = new Student("Vanshika", "CSE");
s2.printDetails();

console.log("\n--- Comparison ---");
console.log("Prototype: instanceof Student & Person:", s1 instanceof StudentProto, s1 instanceof PersonProto);
console.log("Class    : instanceof Student & Person:", s2 instanceof Student, s2 instanceof Person);
console.log("Prototype chain linked:", Object.getPrototypeOf(StudentProto.prototype) === PersonProto.prototype);
console.log("Class chain linked    :", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("Methods are on prototype (prototype):", s1.hasOwnProperty("printName") === false);
console.log("Methods are on prototype (class)    :", s2.hasOwnProperty("printName") === false);

// Note: ES6 classes are just cleaner syntax over the same prototype system.