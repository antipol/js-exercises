let x = 1;
let state;

switch (x) {
  case 0:
    state = "OFF";
    break;
  case 1:
    state = "ON";
    break;
  default:
    state = "Stateless";
}
console.log(state); //ON

let name = "David";

switch (name) {
  case "Jon":
    name = `The name is ${name}!`;
    break;
  case "Mark":
    name = `The name is ${name}!`;
    break;
  case "David":
    name = `The name is ${name}!`;
    break;
  case "Harry":
    name = `The name is ${name}!`;
    break;
  default:
    name = `The name is ${name}!`;
}
console.log(name);


// 1. Color Analyzer
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow).
//
// Example: analyzeColor("Red") -> "Red is a primary color".
let color = "horse";
let meaning;

switch (color) {
  case "red":
    meaning = "Red can symbolize both love and agression";
    break;
  case "blue":
    meaning = "Blue is a calm color that makes some people relax";
    break;
  case "yellow":
    meaning ="Yellow is a happy and fun color";
    break;
  default:
    meaning = "Did you really enter a color?";
}
console.log(meaning);

// 2. Grading
// Create a function that takes a grade in its parameters. Console log comments depending on the grade.
//
// Example: grade("A") -> "Good job!", grade("F") -> "Failed"
let grade = "F";
const result;

switch (grade.toUpperCase()) {
  case "A":
    result = "You're extremely clever";
    break;
  case "B":
    result = "You're very clever";
    break;
  case "C":
    result = "Yay you're good";
    break;
  case "D":
    result = "Great job!";
    break;
  case "E":
    result = "Well done!!!";
    break;
  case "F":
    result = "You're amazing and who cares about grades";
    break;
  default:
    result = "Did you study?";
}
console.log(result);

// 3. What month is it?
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"
const month = new Date().getMonth();
const



// 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple).
//
// Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"



let hour = new Date().getHours();
 if (hour >= 12) {
   let time = "night";
 } else {
   let time = "day";
 }


// let dayAnimals = "day"
let location = ["sleeping house", "petting zoo"];

switch (time) {
  case "night":
    location = location[0];
}
