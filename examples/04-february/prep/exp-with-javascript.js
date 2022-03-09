class Animal {
  constructor(age) {
    this.age = age;
  }

  printAge() {
    document.writeln(`The animal is ${this.age} days old`);
  }
}

class Dog extends Animal {
  constructor(age, name) {
    super(age);
    this.name = name;
  }

  printName() {
    document.writeln(`The name of the dog is ${this.name}`);
  }
}

Animal.prototype.newFn = function () {
  document.writeln(`Parent method on prototype`);
};

let animal = new Animal(10);
let dog = new Dog(10, "Dexter");

animal.printAge();
dog.printAge();
dog.newFn();
