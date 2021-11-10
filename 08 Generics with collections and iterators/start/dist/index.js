"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
let products = [new Product_1.Product("White shirt", 3), new Product_1.Product("Black shirt", 5)];
class Collection {
    constructor(initialItems = []) {
        this.items = new Set(initialItems);
    }
    add(...newItems) {
        newItems.forEach((newItem) => this.items.add(newItem));
    }
    get(name) {
        return [...this.items.values()].find((item) => item.name === name);
    }
    get count() {
        return this.items.size;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products.`);
let p = productCollection.get("White shirt");
console.log(`Product: ${p.name}, ${p.price}`);
