import { Animal, AnimalGuardian } from "./dataTypes";

let guardians = [
    new AnimalGuardian("Bob", "builder"),
    new AnimalGuardian("John", "programmer"),
];

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
}

class SearchableCollection<
    T extends { name: string }
> extends DataCollection<T> {
    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(name: string): T | undefined {
        return this.items.find(item => item.name === name);
    }
}

let guardiansData = new SearchableCollection<AnimalGuardian>(guardians);
let foundGuardian = guardiansData.find("Bob");
if (foundGuardian !== undefined) {
    console.log(`Guardian: ${foundGuardian.name}`);
}
