let numbers = [1, 2, 3];
let strings = ["a", "b", "C"];
let mix = [1, "b", 2];
// let tuple: [string, number] = ["apples", 3, 100];
let tuple = ["apples", 3];
console.log(tuple[0]);
let tuple2 = ["apples", "oranges", 100];
tuple2.forEach((v) => {
    if (typeof v === "string")
        console.log(`String: ${v}`);
});
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apples"] = 0] = "Apples";
    // Oranges,
    Fruits[Fruits["Oranges"] = 30] = "Oranges";
    Fruits[Fruits["Bananas"] = 31] = "Bananas";
})(Fruits || (Fruits = {}));
let products = [
    [Fruits.Apples, 1],
    [Fruits.Oranges, 1.5],
    [Fruits.Bananas, 2.5],
];
products.forEach((fruit) => {
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
var FruitStrings;
(function (FruitStrings) {
    FruitStrings["Apples"] = "Apples";
    FruitStrings["Oranges"] = "Oranges";
    FruitStrings["Bananas"] = "Bananas";
})(FruitStrings || (FruitStrings = {}));
console.log(FruitStrings.Apples);
let restrictedValue = 3;
console.log(restrictedValue);
function fruits(quantity, fruit) {
    return `I have ${quantity} ${fruit}`;
}
let f = fruits(2, "apples");
console.log(f);
