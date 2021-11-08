class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `${this.name} ${this.getSpecificDetails()}`;
    }
}
class Worker1 extends Person {
    constructor(id, name, job) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.job = job;
    }
    getSpecificDetails() {
        return `is a ${this.job}`;
    }
}
let worker1 = new Worker1(1, "Bob", "builder");
console.log(worker1.getDetails());
class Worker2 extends Person {
    constructor(id, name, job, vehicle) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.job = job;
        this.vehicle = vehicle;
    }
    getSpecificDetails() {
        return `is a ${this.job} and drives a ${this.vehicle}`;
    }
}
let worker2 = new Worker2(1, "Jack", "driver", "truck");
console.log(worker2.getDetails());
