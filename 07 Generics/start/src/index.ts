import { Person, Product } from "./dataTypes";

let people = [new Person("Bob", 32), new Person("John", 42)];
let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));

// class DataCollection<T extends Person | Product> {
class DataCollection<T extends { name: string }> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);
let firstPerson = peopleData.getItem(0);
console.log(`First person: ${firstPerson.name}, ${firstPerson.age}`);

let productData = new DataCollection<Product>(products);
console.log(`Product Names: ${productData.getNames().join(", ")}`);
let firstProduct = productData.getItem(0);
console.log(`First product: ${firstProduct.name}, ${firstProduct.price}`);
