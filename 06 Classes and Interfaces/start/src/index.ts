interface Animal {
    name: string;
    getDetails(): string;
}

interface WildAnimal extends Animal {
    kind: string;
    getMoreDetails(): string;
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

class Lion implements WildAnimal {
    constructor(
        public name: string,
        public speech: string,
        public kind: string
    ) {}

    getDetails(): string {
        return `${this.name} the ${this.kind} ${this.speech}`;
    }

    getMoreDetails(): string {
        return `A ${this.kind} is a dangerous wild animal.`;
    }
}

let animals: Animal[] = [new Cat("Oska", "meows"), new Dog("Loki", "barks"), new Lion("Leo", "roars", "lion")];
animals.forEach((animal) => console.log(animal.getDetails()));

let wildAnimals: WildAnimal[] = [new Lion("Leo", "roars", "lion")];
wildAnimals.forEach((animal) => console.log(animal.getMoreDetails()));
