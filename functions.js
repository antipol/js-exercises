// Function = input(arguments/parameters), code, output (return value)

// Function declaration:
function greeting(firstName, lastName) {
  return "Hello " + firstName;
}

console.log(greeting("Phil")); //Hello Phil


// Function expression:
const adder = function(a, b) {
  return a + b;
}

console.log(adder(200, 150)); //350


// undefined for variable:
let square2 = function(num) {
  console.log(num);
}

square2(); //undefined --- because we haven't given an argument when we call the function


// Default arguments:
let leaderboard = function(name = "Max Musterman", score = 0) {
  return `${name} - ${score}`;
}

let match2 = leaderboard(undefined, 100);
console.log(match2); //Max Musterman, 100 --- use undefined to call the default argument (here Max Musterman)


// Arrow function - new in ES6
const adder2 = (a, b) => a + b;
console.log(adder2(100, 50)); //150 --- the fat arrow ( => ) works like return


// Global and local scope
// whats inside a function and its arguments are local, what is after return is local until you call the function, then it becomes available globally


// Pure Function:
const pureEx = (a, b) => a + b;
//only relies on its own info, its own arguments. Doesn't use information from outside the function

const fullName = (firstName = "John", lastName = "Doe") => `${firstName} ${lastName}`;
console.log(fullName(undefined, "Mustermann")); //Max Mustermann

function fullName2(lastName2) {
  const firstName2 = "Max";
  return `${firstName2} ${lastName2}`;
}
console.log(fullName2("Hansen")); //Max Hansen


// Rest parameters:
// ...args
// represents an indefinite number of args as an array
const thirdArg = (...args) => {
  if (args[2]) {
    return "I have a third argument";
  } else {
    return "No third argument";
  }
  return args[2];
}
console.log(thirdArg(2, 4, 5, 6)); //I have a thrird argument

const area = (...args) => {
  if (args.length < 2) return "Not a square";
  if (args[2]) return `${args[0] * args[1] * $args[2]}m${args.length}`
  return `${args[0] * args[1]}m${args.length}`;
}
console.log();



function remainder(x, y) {
  let result = x % y;
  return result;
}
let sum = remainder(12, 7);
console.log(sum); //5
//x and y are arguments / parameters

function poundsToKg(pounds) {
  let kilogram = pounds * 0.45;
  return kilogram;
}
console.log(poundsToKg(10)); //4.5


function askName(firstName = "Jane", lastName = "Doe") {
  return "Hello " + firstName + " " + lastName;
}

console.log(askName("Alice", "Summer")); //Hello Alice Summer



function dataType(arg) {
  return typeof arg;
}

let typeIs = dataType(10);
console.log(typeIs); //number


console.log(String(Math.min("2", "5"))); //"2"


console.log(typeof NaN); //number

if (NaN != true) {
  console.log(0);
} else {
  console.log(1);
}

let arr = [0, null, undefined, NaN, false];

console.log(arr.includes(NaN));
