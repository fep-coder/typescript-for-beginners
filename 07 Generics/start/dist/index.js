"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let guardians = [
    new dataTypes_1.AnimalGuardian("Bob", "builder"),
    new dataTypes_1.AnimalGuardian("John", "programmer"),
];
let animals = [
    new dataTypes_1.Animal("Oska", "cat", "Bob"),
    new dataTypes_1.Animal("Loki", "dog", "John"),
];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach((item) => {
            let match = targetData.find((d) => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let guardiansData = new DataCollection(guardians);
let collatedData = guardiansData.collate(animals, "name", "guardianName");
collatedData.forEach(g => console.log(`${g.name} the ${g.job} has a ${g.kind}`));
