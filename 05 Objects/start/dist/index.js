let names = { name: "John" };
// console.log(names.lastname);
let products = [
    { name: "apples", price: 1 },
    { name: "oranges", price: 2 },
];
let products2 = [
    { name: "apples", price: 1 },
    { name: "oranges" },
];
let products3 = [
    { name: "apples", price: 1 },
    { name: "oranges", price: 2 },
];
let shapeTypeUnion = [
    { name: "apples", age: 23 },
    { name: "bananas", price: 2, age: 33 },
];
shapeTypeUnion.forEach((item) => console.log(item.name));
// shapeTypeUnion.forEach((item) => console.log(item.age));
let typeIntersection = [
    { name: "bananas", price: 2, age: 33 },
];
typeIntersection.forEach((item) => console.log(item.age));
