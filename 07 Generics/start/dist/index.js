"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let guardians = [
    new dataTypes_1.AnimalGuardian("Bob", "builder"),
    new dataTypes_1.AnimalGuardian("John", "programmer"),
];
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
    find(name) {
        return this.items.filter((item) => item.name === name);
    }
}
let guardiansFound = new SearchableCollection(guardians);
guardiansFound.find("Bob").forEach((a) => console.log(`${a.job}`));
let animalsFound = new SearchableCollection(animals);
animalsFound.find("Oska").forEach((a) => console.log(`${a.kind}`));
