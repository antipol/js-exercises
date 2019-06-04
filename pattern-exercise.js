// 1.
// INPUT --- OUTPUT
// "DCI" --- false
// "Fantastic 15!" --- true
// "Green balcony" --- false
// "climbing Mount Everest." --- true
// "What are you doing?" --- true

// let str1 = "DCI";
// let str2 = "Fantastic 15!";
// let str3 = "Green balcony";
// let str4 = "climbing Mount Everest.";
// let str5 = "What are you doing?";
//
// if (str2.includes("!") || str2.includes(".") || str2.includes("?")) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2.
let str = "Bloom";
let strLen = str.length;
let ans = strLen > 5;

console.log(ans); //false

// OR

if (strLen > 5) {
  console.log(true);
} else {
  console.log(false);
} //false



// 3.
let strSpace = "hello how are you";
ans = strSpace.includes(" ") ? false : true;

console.log(ans); // false



// 4.
let num = 2.75
ans = num % 1 === 0 ? "coffee" : "triple espresso";
console.log(ans); //triple espresso

// OR

num = 2.0;
let numStr = num.toString();
ans = numStr.includes(".") ? "triple espresso" : "coffee";
console.log(ans); //coffee
//But doesn't register float if num = 2.0, will still return coffee



// 5.
// const randomNum = Math.floor(Math.random() * 5 + 1);

const randomNum = Math.ceil(Math.random() * 5);
let sentence;

if (randomNum === 1) {
  sentence = "you got 1";
} else if (randomNum === 2) {
  sentence = "2 is your lucky number";
} else if (randomNum === 3) {
  sentence = "3 is a number";
} else if (randomNum === 4) {
  sentence = "congratulations, you got 4";
} else {
  sentence = "your number is 5";
}
// console.log(randomNum);
console.log(sentence);
