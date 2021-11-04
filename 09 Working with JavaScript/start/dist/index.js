"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
let kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
let hat = new product_1.SportsProduct(2, "Hat", 22.1, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportsProduct(3, "Soccer Ball", 19.5, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
console.log(`Cart has ${cart.itemCount} items`);
console.log(`Cart value is $${cart.totalPrice.toFixed(2)}`);
