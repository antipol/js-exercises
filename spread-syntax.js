//SPREAD SYNTAX

//Spread syntax allows an iterable such as an array or string t be expanded

const sum = (a, b, c) => a + b + c;
const nums = [1, 2, 3];
//we want to pass in the nums variable as the three arguments for the sum function
console.log(sum(nums)); //1,2,3,undefinedundefined
console.log(sum(...nums)); //6
// the spread syntax spreads out the array so the function can take each element as seperate arguments


//On MATH OBJECT
const numArr = [433, 664, 12, 566]
let result = Math.max(numArr);
console.log(result); //NaN --- Wrong, use spread syntax:
result = Math.max(...numArr);
console.log(result); //664


//ARRAYS
const mcs = ["Biggie", "Tupac", "Jay-Z"];
let mcs2 = mcs;
console.log(mcs2); //["Biggie", "Tupac", "Jay-Z"]
mcs.push("Snoop"); //note: pushing to mcs, not mcs2
console.log(mcs2); //["Biggie", "Tupac", "Jay-Z", "Snoop"] //and still Snoop appeared in mcs2

// THEREFORE:
mcs.pop(); //first, take off Snoop again
mcs2 = [...mcs]; //change to spread syntax to make a copy that doesn't have the same reference as mcs
console.log(mcs2); //["Biggie", "Tupac", "Jay-Z"]

const mcs3 = ["Nas", "KRS-1"];
const legends = [...mcs2, ...mcs3]; //use spread syntax to combine more arrays into one
console.log(legends); //["Biggie", "Tupac", "Jay-Z", "Nas", "KRS-1"]


//STRING TO ARRAY
const team = "Fantastic15";
const splitTeam = [...team]; //instead of using split method
console.log(splitTeam); //array with each single character as the elements
