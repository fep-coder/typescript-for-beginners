"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("White shirt", 3), new dataTypes_1.Product("Black shirt", 5)];
class Collection {
    constructor(items = []) {
        this.items = items;
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find((item) => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("White shirt");
console.log(`Product: ${p.name}, ${p.price}`);
