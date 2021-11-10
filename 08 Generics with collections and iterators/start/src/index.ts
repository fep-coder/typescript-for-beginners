import { Product } from "./Product";

let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];

class Collection<T extends { name: string }> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    find(name: string): T {
        return this.items.find((item) => item.name === name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let productCollection: Collection<Product> = new Collection(products);
