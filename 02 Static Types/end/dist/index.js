let myVar;
console.log(`${typeof myVar}`);
myVar = 10;
console.log(`${typeof myVar}`);
myVar = "Hello";
console.log(`${typeof myVar}`);
myVar = true;
console.log(`${typeof myVar}`);
function multiply(amount) {
    return amount * 2;
}
console.log(multiply(10));
console.log(multiply("Hello"));
console.log(multiply(true));
function multiplyTyped(amount) {
    return amount * 2;
}
console.log(multiplyTyped(10));
// console.log(multiplyTyped("Hello"));
// console.log(multiplyTyped(true));
let number = 100;
// number = "100";
let multiplyNumber = multiplyTyped(number);
console.log(multiplyNumber);
let number2 = 200;
// number2 = "hello";
let multiplyNumber2 = multiplyTyped(number2);
console.log(multiplyNumber2);
function multiplyAny(amount) {
    return amount * 2;
}
console.log(multiplyAny(10));
console.log(multiplyAny("Hello"));
console.log(multiplyAny(true));
function stringOrNumber(v, isString) {
    return isString ? "string" : v;
}
let stringVariable = stringOrNumber("Hello", true);
let numberVariable = stringOrNumber(4, false);
console.log(stringVariable);
console.log(numberVariable);
stringVariable = stringOrNumber("Hello", true);
numberVariable = stringOrNumber(4, false);
console.log(stringVariable);
console.log(numberVariable);
// let booleanVariable = stringOrNumber(4, false) as boolean;
let booleanVariable = stringOrNumber(4, false);
console.log(booleanVariable);
let stringVariable2 = stringOrNumber("Hello", true);
if (typeof stringVariable2 === "number") {
    console.log("Number");
}
else if (typeof stringVariable2 === "string") {
    console.log("String");
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
function someFunc(value) {
    return value;
}
let value = someFunc([1, 2, 3]);
switch (typeof value) {
    case "number":
        console.log("Number");
        break;
    case "string":
        console.log("String");
        break;
    default:
        let result = value;
        console.log(`Unexpected type for value: ${result}`);
        let result2 = value;
        // let array: [] = result2;
        let array = result2;
        console.log(array);
}
let test = "hello";
test = null;
test = undefined;
