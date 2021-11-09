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
class Lion {
    constructor(name, speech, kind) {
        this.name = name;
        this.speech = speech;
        this.kind = kind;
    }
    getDetails() {
        return `${this.name} the ${this.kind} ${this.speech}`;
    }
    getMoreDetails() {
        return `A ${this.kind} is a dangerous wild animal.`;
    }
}
let animals = [new Cat("Oska", "meows"), new Dog("Loki", "barks"), new Lion("Leo", "roars", "lion")];
animals.forEach((animal) => console.log(animal.getDetails()));
let wildAnimals = [new Lion("Leo", "roars", "lion")];
wildAnimals.forEach((animal) => console.log(animal.getMoreDetails()));
