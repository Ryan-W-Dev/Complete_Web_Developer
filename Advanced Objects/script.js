// Objects are mutable and shared by reference, so changes through one variable affect all variables referencing the same object.
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//context - tells us if two objects are the same object in memory
console.log(object1 === object2);

// Instantiation of objects using classes
class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am level ${this.level}.`);
  }
}
// Inheritance allows us to create a new class based on an existing class, inheriting its properties and methods.
class Wizard extends Player {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
  play() {
    console.log(`Casting ${this.spell}!`);
  }
}
// Creating an instance of the Wizard class and calling its methods
const wizard1 = new Wizard('Gandalf', 100, 'You Shall Not Pass');
wizard1.introduce();
wizard1.play();
