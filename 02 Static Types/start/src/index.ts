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

function stringOrNumber(
    v: string | number,
    isString: boolean
): string | number {
    return isString ? "string" : v;
}

let stringVariable: string | number = stringOrNumber("Hello", true);
let numberVariable: string | number = stringOrNumber(4, false);

console.log(stringVariable);
console.log(numberVariable);

stringVariable = stringOrNumber("Hello", true) as string;
numberVariable = stringOrNumber(4, false) as number;

console.log(stringVariable);
console.log(numberVariable);

// let booleanVariable = stringOrNumber(4, false) as boolean;

let booleanVariable = stringOrNumber(4, false) as any as boolean;
console.log(booleanVariable);
