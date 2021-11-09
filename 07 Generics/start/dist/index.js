"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob", 32), new dataTypes_1.Person("John", 42)];
// let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));
// type dataType = Person | Product;
class PeopleCollection {
    // private items: dataType[] = [];
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);
let firstPerson = peopleData.getItem(0);
console.log(`First person: ${firstPerson.name}, ${firstPerson.age}`);
