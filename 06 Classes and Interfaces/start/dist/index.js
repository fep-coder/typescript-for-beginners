class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Employee extends Person {
    constructor(id, name, job, salary) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.job = job;
        this.salary = salary;
    }
}
const people = [new Person(1, "John"), new Employee(2, "Bob", "builder", 4000)];
people.forEach((item) => {
    console.log(`Person: ${item.name}`);
    if (item instanceof Employee) {
        console.log(`Person: ${item.name} is a ${item.job}`);
    }
});
