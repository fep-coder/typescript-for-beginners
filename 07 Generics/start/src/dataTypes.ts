export class Person {
    constructor(public name: string, public age: number) {}
}

export class Product {
    constructor(public name: string, public price: number) {}
}

export class Animal {
    constructor(
        public name: string,
        public kind: string,
        public guardianName: string
    ) {}
}

export class AnimalGuardian {
    constructor(public name: string, public job: string) {}
}
