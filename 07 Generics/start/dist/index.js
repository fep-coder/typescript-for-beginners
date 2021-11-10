"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let guardians = [
    new dataTypes_1.AnimalGuardian("Bob", "builder"),
    new dataTypes_1.AnimalGuardian("John", "programmer"),
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
        return this.items.find(item => item.name === name);
    }
}
let guardiansData = new SearchableCollection(guardians);
let foundGuardian = guardiansData.find("Bob");
if (foundGuardian !== undefined) {
    console.log(`Guardian: ${foundGuardian.name}`);
}
