let names = { name: "John" };
// console.log(names.lastname);

let products: { name: string; price: number }[] = [
    { name: "apples", price: 1 },
    { name: "oranges", price: 2 },
];

let products2: { name: string; price?: number }[] = [
    { name: "apples", price: 1 },
    { name: "oranges" },
];

type Product = {
    name: string;
    price: number;
};

let products3: Product[] = [
    { name: "apples", price: 1 },
    { name: "oranges", price: 2 },
];

type Person = {
    name: string;
    age: number;
};

let shapeTypeUnion: (Product | Person)[] = [
    { name: "apples", age: 23 },
    { name: "bananas", price: 2, age: 33 },
];

shapeTypeUnion.forEach((item) => console.log(item.name));
// shapeTypeUnion.forEach((item) => console.log(item.age));
