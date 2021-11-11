import { Product } from "./product";
import { Cart } from "./cart";

let apples = new Product(1, "apples", 1);
let oranges = new Product(2, "oranges", 2);
let cart = new Cart("Bob");

cart.addProduct(apples, 1);
cart.addProduct(oranges, 2);

console.log(`Cart has ${cart.itemCount} items`);
console.log(`Cart value is $${cart.totalPrice.toFixed(2)}`);