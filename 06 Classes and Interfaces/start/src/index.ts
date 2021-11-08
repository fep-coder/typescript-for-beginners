class Person {
    constructor(public readonly id: number, public name: string) {}
}

class Employee extends Person {
    constructor(
        public readonly id: number,
        public name: string,
        public job: string,
        private salary: number
    ) {
        super(id, name);
    }
}

const people = [new Person(1, "John"), new Employee(2, "Bob", "builder", 4000)];
people.forEach((item) => {
    console.log(`Person: ${item.name}`);
    if (item instanceof Employee) {
        console.log(`Person: ${item.name} is a ${item.job}`);
    }
});
