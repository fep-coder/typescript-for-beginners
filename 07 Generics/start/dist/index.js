"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [new dataTypes_1.Person("Bob", 32), new dataTypes_1.Person("John", 42)];
let products = [new dataTypes_1.Product("White shirt", 3), new dataTypes_1.Product("Black shirt", 5)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));
// class DataCollection<T extends Person | Product> {
class DataCollection {
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
let peopleData = new DataCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);
let firstPerson = peopleData.getItem(0);
console.log(`First person: ${firstPerson.name}, ${firstPerson.age}`);
let productData = new DataCollection(products);
console.log(`Product Names: ${productData.getNames().join(", ")}`);
let firstProduct = productData.getItem(0);
console.log(`First product: ${firstProduct.name}, ${firstProduct.price}`);
