import { Person, Product } from "./dataTypes";

let people = [new Person("Bob", 32), new Person("John", 42)];

// let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));

// type dataType = Person | Product;

class PeopleCollection {
    private items: Person[] = [];
    // private items: dataType[] = [];

    constructor(initialItems: Person[]) {
        this.items.push(...initialItems);
    }

    add(newItem: Person) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getItem(index: number): Person {
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);
console.log(`First person: ${firstPerson.name}, ${firstPerson.age}`);