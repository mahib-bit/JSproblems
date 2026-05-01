let a = 5;
let b = 10;
console.log(`Before swap: a = ${a}, b = ${b}`);
// Swap using a temporary variable
let temp = a;
a = b;
b = temp;
console.log(`After swap: a = ${a}, b = ${b}`);

// Swap using destructuring assignment
[a, b] = [b,a];
console.log(`Again swapping After using destructuring: a = ${a}, b = ${b}`);