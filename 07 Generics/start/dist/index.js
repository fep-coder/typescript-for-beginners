"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let animals = [
    new dataTypes_1.Animal("Oska", "cat", "Bob"),
    new dataTypes_1.Animal("Lea", "cat", "Bob"),
    new dataTypes_1.Animal("Loki", "dog", "John"),
];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
}
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(kind) {
        return this.items.filter((item) => item.kind === kind);
    }
}
let animalsFound = new SearchableCollection(animals);
animalsFound
    .find("cat")
    .forEach((a) => console.log(`${a.name} is a ${a.kind}`));
