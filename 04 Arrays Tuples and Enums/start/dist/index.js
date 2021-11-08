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
