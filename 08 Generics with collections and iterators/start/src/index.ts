import { Product } from "./Product";

let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];

class Collection<T extends { name: string }> {
    private items: Set<T>;

    constructor(initialItems: T[] = []) {
        this.items = new Set<T>(initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach((newItem) => this.items.add(newItem));
    }

    get(name: string): T {
        return [...this.items.values()].find((item) => item.name === name);
    }

    get count(): number {
        return this.items.size;
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products.`);

let p = productCollection.get("White shirt");
console.log(`Product: ${p.name}, ${p.price}`);