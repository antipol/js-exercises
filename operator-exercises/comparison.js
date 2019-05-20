let x = 20;
let y = 30;

// 1. Check whether x and y are equal.
console.log(x === y); //false

// 2. Check whether x and y are **not** equal.
console.log(x != y); //true, 20 is not equal to 30

// 3. Check whether x is greater than y.
console.log(x > y); //false

// 4. Check whether x is less than or equal to y.
console.log(x <= y); //true

// 5. Check whether y is greater than x.
console.log(y > x); //true

// 6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y.
let z = 5;
console.log(z * x > z + y); //true

// 7. Subtract z from x and check whether this result is less than y divided by z.
console.log(x - z < y / z); //false

// 8. Check whether z, x and y are equal.
console.log(z === x === y); //false

// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.
console.log(x % z === y % z); //true

// 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.
console.log(z + x > y - z); //false
console.log(z + x === y - z); //true
