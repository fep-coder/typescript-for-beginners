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