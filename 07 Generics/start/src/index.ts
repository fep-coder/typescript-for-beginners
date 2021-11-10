import { Animal } from "./dataTypes";

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

class SearchableCollection extends DataCollection<Animal> {
    constructor(initialItems: Animal[]) {
        super(initialItems);
    }

    find(kind: string): Animal[] {
        return this.items.filter((item) => item.kind === kind);
    }
}

let animalsFound = new SearchableCollection(animals);
animalsFound
    .find("cat")
    .forEach((a) => console.log(`${a.name} is a ${a.kind}`));
