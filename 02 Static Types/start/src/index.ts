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

function multiplyTyped(amount: number): number {
    return amount * 2;
}

console.log(multiplyTyped(10));
// console.log(multiplyTyped("Hello"));
// console.log(multiplyTyped(true));

let number: number = 100;
// number = "100";

let multiplyNumber: number = multiplyTyped(number);
console.log(multiplyNumber);

let number2 = 200;
// number2 = "hello";

let multiplyNumber2 = multiplyTyped(number2);
console.log(multiplyNumber2);

function multiplyAny(amount: any): any {
    return amount * 2;
}

console.log(multiplyAny(10));
console.log(multiplyAny("Hello"));
console.log(multiplyAny(true));