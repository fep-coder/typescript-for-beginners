"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalGuardian = exports.Animal = exports.Product = exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class Animal {
    constructor(name, kind, guardianName) {
        this.name = name;
        this.kind = kind;
        this.guardianName = guardianName;
    }
}
exports.Animal = Animal;
class AnimalGuardian {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}
exports.AnimalGuardian = AnimalGuardian;
