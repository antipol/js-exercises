// If else statements
let age = 17;

if (age >= 18) {
  console.log("Lets drink beer!");
} else {
  console.log("Grab a soda!");
}

let temp = 32;

if ( temp <= 32) {
  console.log("freezing cold");
} else if (temp > 32 && temp <= 65) {
  console.log("medium weather");
} else {
  console.log("go swimming");
}

// exercises
// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let x = 6;
let y = 190;
let z = 55;

if (x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99) {
  console.log(true);
} else {
  console.log(false);
}
//true

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
// see no 1

// 3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 2000;
let b = 300;
let c = 5000;
// let ans = Math.max(a, b, c);
// console.log(ans);

if (a > b && a > c) {
  console.log(a);
} else if (b > c) {
  console.log(b);
} else {
  console.log(c);
} //5000

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str = "thon";
let newStr = "Py" + str;

if (newStr.substring(0, 2) === "Py") {
  console.log(str);
} else {
  console.log(newStr);
} //thon

// 5. Calculate the sum of the two integers. If the sum is in the range 50..80 print 65 other wise print 80.
x = 10;
y = 60;

if (x + y >= 50 && x + x + y <= 80) {
  console.log(65);
} else {
  console.log(80);
} //65

// 6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.

x = 2;
y = 10;

if (x + y === 8 || x - y === 8 || y - x === 8) {
  console.log(true);
} //true

// 7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true.
x = 11;
y = 4;

if (x === 15 || y === 15 || x + y ===15) {
  console.log(true);
} //true

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
x = 20;
y = 110;

if (x % 7 === 0 || x % 11 === 0 || y % 7 === 0 || y % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
} //true

// 9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum.
a = 10;
b = 10;
if (a === b) {
  console.log((a + b) * 3);
} //60

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
x = 25;

if (x > 19) {
  console.log((x - 19) * 2);
} //12
