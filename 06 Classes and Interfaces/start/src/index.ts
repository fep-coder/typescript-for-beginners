interface Animal {
    name: string;
    getDetails(): string;
}

class Cat implements Animal {
    constructor(public name: string, public speech: string) {}

    getDetails(): string {
        return `${this.name} ${this.speech}`;
    }
}

class Dog implements Animal {
    constructor(public name: string, public speech: string) {}

    getDetails(): string {
        return `${this.name} ${this.speech}`;
    }
}

let animals: Animal[] = [new Cat("Oska", "meows"), new Dog("Loki", "barks")];

animals.forEach((animal) => console.log(animal.getDetails()));
