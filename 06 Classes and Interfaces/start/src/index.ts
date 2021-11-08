abstract class Person {
    constructor(public readonly id: number, public name: string) {}

    getDetails(): string {
        return `${this.name} ${this.getSpecificDetails()}`;
    }

    abstract getSpecificDetails(): string;
}

class Worker1 extends Person {
    constructor(
        public readonly id: number,
        public name: string,
        public job: string
    ) {
        super(id, name);
    }

    getSpecificDetails(): string {
        return `is a ${this.job}`;
    }
}

let worker1 = new Worker1(1, "Bob", "builder");
console.log(worker1.getDetails());

class Worker2 extends Person {
    constructor(
        public readonly id: number,
        public name: string,
        public job: string,
        public vehicle: string
    ) {
        super(id, name);
    }

    getSpecificDetails(): string {
        return `is a ${this.job} and drives a ${this.vehicle}`;
    }
}

let worker2 = new Worker2(1, "Jack", "driver", "truck");
console.log(worker2.getDetails());
