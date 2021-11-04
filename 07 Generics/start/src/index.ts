import { Person, Product } from "./dataTypes";

let people = [
    new Person("Bob", 32),
    new Person("John", 42),
];

let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];
[...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));