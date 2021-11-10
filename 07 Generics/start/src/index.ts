import { Animal, AnimalGuardian } from "./dataTypes";

let guardians = [
    new AnimalGuardian("Bob", "builder"),
    new AnimalGuardian("John", "programmer"),
];

let animals = [
    new Animal("Oska", "cat", "Bob"),
    new Animal("Lea", "cat", "Bob"),
    new Animal("Loki", "dog", "John"),
];

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
}

class SearchableCollection<
    T extends Animal | AnimalGuardian
> extends DataCollection<T> {
    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(name: string): T[] {
        return this.items.filter((item) => item.name === name);
    }
}

let guardiansFound = new SearchableCollection<AnimalGuardian>(guardians);
guardiansFound.find("Bob").forEach((a) => console.log(`${a.job}`));

let animalsFound = new SearchableCollection<Animal>(animals);
animalsFound.find("Oska").forEach((a) => console.log(`${a.kind}`));
