import { Product } from "./Product";

let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];

class Collection<T extends { name: string }> {
    private items: Map<string, T>;

    constructor(initialItems: T[] = []) {
        this.items = new Map<string, T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach((newItem) => this.items.set(newItem.name, newItem));
    }

    get(name: string): T {
        return this.items.get(name);
    }

    get count(): number {
        return this.items.size;
    }

    values(): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products.`);

let iterator: Iterator<Product> = productCollection.values();
let iteratorResult: IteratorResult<Product> = iterator.next();
while (!iteratorResult.done) {
    console.log(`Product: ${iteratorResult.value.name}, ${iteratorResult.value.price}`);
    iteratorResult = iterator.next();
}