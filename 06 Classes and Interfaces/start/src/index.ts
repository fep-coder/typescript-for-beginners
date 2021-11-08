class Person {

    constructor(public readonly id: number,
        public name: string,
        public job: string,
        private salary: number) {

    }

    printPerson(): void {
        console.log(
            `${this.name} is a ${this.job} and has a salary of ${this.salary}`
        );
    }
}

const person = new Person(1, "John", "programmer", 5000);
person.printPerson();