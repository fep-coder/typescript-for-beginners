class Cat {
    constructor(name, speech) {
        this.name = name;
        this.speech = speech;
    }
    getDetails() {
        return `${this.name} ${this.speech}`;
    }
}
class Dog {
    constructor(name, speech) {
        this.name = name;
        this.speech = speech;
    }
    getDetails() {
        return `${this.name} ${this.speech}`;
    }
}
let animals = [new Cat("Oska", "meows"), new Dog("Loki", "barks")];
animals.forEach((animal) => console.log(animal.getDetails()));
