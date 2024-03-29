let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "C"];
let mix: (number | string)[] = [1, "b", 2];

// let tuple: [string, number] = ["apples", 3, 100];
let tuple: [string, number] = ["apples", 3];
console.log(tuple[0]);

let tuple2: [string, string, number] = ["apples", "oranges", 100];
tuple2.forEach((v: string | number) => {
    if (typeof v === "string") console.log(`String: ${v}`);
});

enum Fruits {
    Apples,
    // Oranges,
    Oranges = 30,
    Bananas,
}

let products: [Fruits, number][] = [
    [Fruits.Apples, 1],
    [Fruits.Oranges, 1.5],
    [Fruits.Bananas, 2.5],
];

products.forEach((fruit: [Fruits, number]) => {
    switch (fruit[0]) {
        case Fruits.Apples:
            console.log(`Price of apples is: ${fruit[1]}`);
            break;
        case Fruits.Oranges:
            console.log(`Price of oranges is: ${fruit[1]}`);
            break;
        case Fruits.Bananas:
            console.log(`Price of bananas is: ${fruit[1]}`);
            break;
    }
});

console.log(Fruits.Apples);
console.log(Fruits.Oranges);
console.log(Fruits.Bananas);

enum FruitStrings {
    Apples = "Apples",
    Oranges = "Oranges",
    Bananas = "Bananas",
}
console.log(FruitStrings.Apples);

let restrictedValue: 1 | 2 | 3 = 3;
console.log(restrictedValue);

function fruits(quantity: 1 | 2, fruit: string): string {
    return `I have ${quantity} ${fruit}`;
}
let f = fruits(2, "apples");
console.log(f);

type comboType = [string, number | true, 1 | 2 | 3][];
function getValue(input: comboType): comboType {
    return [
        ["Apples", 100, 2],
        ["Oranges", true, 3],
    ]
}

let result: comboType = getValue([["a", 1, 1]]);
console.log(result);