import { Person } from "./dataTypes";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

class ArrayCollection<T extends shapeType> implements Collection<T> {
    private items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }
    get(name: string): T {
        return this.items.find((item) => item.name === name);
    }
    get count(): number {
        return this.items.length;
    }
}

let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
peopleCollection.add(new Person("Bob", 30), new Person("John", 40));
console.log(`Collection size: ${peopleCollection.count}`);