"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(name) {
        return this.items.find((item) => item.name === name);
    }
}
class PersonCollection extends ArrayCollection {
    get(name) {
        return this.items.find((item) => item.name === name);
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob", 30), new dataTypes_1.Person("John", 40));
let productCollection = new ProductCollection();
productCollection.add(new dataTypes_1.Product("White shirt", 4), new dataTypes_1.Product("Black shirt", 5), new dataTypes_1.Product("Brown shirt", 5));
[peopleCollection, productCollection].forEach((c) => console.log(`Size: ${c.count}`));
