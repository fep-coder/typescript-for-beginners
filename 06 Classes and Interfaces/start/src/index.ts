class Person {
    public readonly id: number;
    public name: string;
    public job: string;
    private salary: number;

    // public uninitProperty: string;

    constructor(id: number, name: string, job: string, salary: number) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.salary = salary;
    }

    printPerson(): void {
        console.log(
            `${this.name} is a ${this.job} and has a salary of ${this.salary}`
        );
    }
}

const person = new Person(1, "John", "programmer", 5000);
person.printPerson();
// console.log(person.salary); 

// person.id = 4;