import { Animal, AnimalGuardian } from "./dataTypes";

let guardians = [
    new AnimalGuardian("Bob", "builder"),
    new AnimalGuardian("John", "programmer"),
];
let animals = [
    new Animal("Oska", "cat", "Bob"),
    new Animal("Loki", "dog", "John"),
];

class DataCollection<T extends { name: string }, U> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];
        this.items.forEach((item) => {
            let match = targetData.find(
                (d) => d[targetProp] === item[itemProp]
            );
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}

let guardiansData = new DataCollection<AnimalGuardian, Animal>(guardians);
let collatedData = guardiansData.collate(animals, "name", "guardianName");
collatedData.forEach(g => console.log(`${g.name} the ${g.job} has a ${g.kind}`));