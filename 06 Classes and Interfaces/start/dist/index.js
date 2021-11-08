class Person {
    constructor(id, name, job, salary) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.salary = salary;
    }
    printPerson() {
        console.log(`${this.name} is a ${this.job} and has a salary of ${this.salary}`);
    }
}
const person = new Person(1, "John", "programmer", 5000);
person.printPerson();
