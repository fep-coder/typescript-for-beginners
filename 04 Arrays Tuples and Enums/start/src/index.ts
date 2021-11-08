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
