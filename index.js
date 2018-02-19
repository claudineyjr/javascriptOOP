// In Object Oriented Programming we always name the class with the first letter capitalized.
// The instances of the class can be named as you wish. I always use the Camel Case: Ex: theFluffyCat
class Animal {
  constructor(type, name, sound, age) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.age = age;
  }


  makeASound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
}

// Here I create a new instance of the Animal class
const pudim = new Animal('cat', 'Pudim', 'meauou', 3);

// Here I create other instance of the Animal class, with other attributes
const misty = new Animal('dog', 'Misty', 'Au Au Au', 1);

// Here I create another instance of the Animal class, but I don't use any attribute, so the attributes of this instance will be undefined
const vaca = new Animal();

// Here you can see all the attributes of variable pudim
console.log(pudim);

// Here you can see all the attributes of variable pudim
console.log(misty);

// Here you can see that all the attributes of this object will be undefined
console.log(vaca);

// Here I execute the makeASound() function of the variable pudim
pudim.makeASound();

// Here I execute the makeASound() function of the variable misty
misty.makeASound();

// Here we'll have a output with two undefined attributes.
vaca.makeASound();
