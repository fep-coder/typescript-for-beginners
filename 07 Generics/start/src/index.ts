import { Person, Product } from "./dataTypes";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

abstract class ArrayCollection<T extends shapeType> implements Collection<T> {
    protected items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }
    abstract get(name: string): T;

    get count(): number {
        return this.items.length;
    }
}

class ProductCollection extends ArrayCollection<Product> {
    get(name: string): Product {
        return this.items.find((item) => item.name === name);
    }
}

class PersonCollection extends ArrayCollection<Person> {
    get(name: string): Person {
        return this.items.find((item) => item.name === name);
    }
}

let peopleCollection: Collection<Person> = new PersonCollection();
peopleCollection.add(new Person("Bob", 30), new Person("John", 40));

let productCollection: Collection<Product> = new ProductCollection();
productCollection.add(
    new Product("White shirt", 4),
    new Product("Black shirt", 5),
    new Product("Brown shirt", 5),
);

[peopleCollection, productCollection].forEach((c) =>
    console.log(`Size: ${c.count}`)
);
