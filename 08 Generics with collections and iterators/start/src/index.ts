import { Product } from "./dataTypes";

let products = [new Product("White shirt", 3), new Product("Black shirt", 5)];

type shapeType = { name: string };

class Collection<T extends shapeType> {
    constructor(private items: T[] = []) {}

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

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${ productCollection.count } products`);
let p = productCollection.get("White shirt");
console.log(`Product: ${ p.name }, ${ p.price }`);