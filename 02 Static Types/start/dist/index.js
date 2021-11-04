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
