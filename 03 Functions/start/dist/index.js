function someFunc(a) {
    return a;
}
// function someFunc(a, b) {
//     return a + b;
// }
function params(param1, param2) {
    return param1 + param2;
}
// const params1 = params(1);
const params2 = params(1, 2);
// const params3 = params(1, 2, 3);
function optional(a, b) {
    return a + (b || 5);
}
let opt = optional(1, 2);
console.log(opt);
opt = optional(1);
console.log(opt);
function defaultValues(a, b = 5) {
    return a + b;
}
let def = defaultValues(1);
console.log(def);
function a(b) {
    if (b != null)
        return b;
}
function typedFunction(a, b) {
    // return "hello";
    return a + b;
}
function voidFunction(s) {
    console.log(s);
}
voidFunction("Hello");
function writeValue(value) {
    console.log(`Value: ${value}`);
}
function addFive(value) {
    if (value != null) {
        return value + 5;
    }
    return null;
}
let addFiveResult = addFive(100);
// if (typeof addFiveResult === "number") {
writeValue(addFiveResult);
// }
