// #Conditionals Exercises P2
// **Print your results to the console**

// 1. Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman".
let firstName = "Trine";
let age = 30;

if (age < 13) {
  console.log(`${firstName} is a boy/girl`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young man/woman`);
} else {
  console.log(`${firstName} is a man/woman`);
} //Trine is a man/woman


// 2. John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// > Calculate the average score for each team.
function average(point1, point2, point3) {
  return (point1 + point2 + point3) / 3;
}

let player1 = "John";
let player2 = "Mike";

let averagePlayer1 = average(89, 120, 103);
// console.log(averagePlayer1); //104

let averagePlayer2 = average(116, 94, 123)
// console.log(averagePlayer2); //111

// > Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

let winner;

if (averagePlayer1 === averagePlayer2) {
  winner = "draw";
  score = averagePlayer1;
} else if (averagePlayer1 > averagePlayer2) {
  winner = player1;
  score = averagePlayer1;
} else {
  winner = player2;
  score = averagePlayer2;
} //Mikes team had an average score of 111
console.log(winner, score); //Mike 111

// > Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// see previous exercise
// add 21 points to averagePlayer1 to get a draw


// > Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let player3 = "Mary";
let averagePlayer3 = average(97, 134, 105);

if (averagePlayer3 > score) {
  winner = player3;
  score = averagePlayer3;
} else if (averagePlayer3 === score) {
  winner = "draw";
};

console.log(winner, score); //Mary 112

// > Like before, change the scores to generate different winners, keeping in mind there might be draws.



// 3. Calculate the student average mark and then give the student a grade.
//
// student marks = 90, 64, 75, 83, 80, 55
//
// - A+ if the average is greater than 90.
// - A if the average is greater than 80 and less than or equal to 90	.
// - B+ if the average is greater than 70 and less than or equal to 80.
// - B if the average is greater than 60 and less than or equal to 70.
// - C+ if the average is greater than 50 and less than or equal to 60.
// - C if the average is greater than 40  and less than or equal to 50.
// - D if the average is greater than 30 and less than or equal to 40.
// - F if the average is less than or equal to 30.



// 4. Make an if/else statement depending on the weather today!
// Create a variable named "temperature" and "weather".
// Then, create outputs based on the variable values e.g.
// if ((temperature > 15) && (weather === 'sunny') {
//     console.log(`It is ${temperature} degrees outside and ${weather}`.
// }
//
// Do this for sunny weather, rainy weather, snow and an overcast sky.
//
// 5. Make an if/else statement depending on a person's job.
// Create two variables "firstName" and "job".
// Print different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin" / "Maria is a designer in Berlin".
// Make 5 different possible outcomes depending on the value of job.
//

// 6. Determine whether a given year is a leap year in the Gregorian calendar.
let year = 2019;
console.log(year % 4 === 0 ? "Leap year" : "Not a leap year"); //Not a leap year

// OR
let leapYear = year % 4 === 0;
console.log(`${year} is a leap year: ${leapYear}`); //2019 is a leap year: false



// 7. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number.

// let x = 9;
// let ans;
//
// if (x % 3 === 0) {
//   if (x % 5 === 0) {
//     ans = "FizzBuzz";
//   } else {
//     ans = "Fizz";
//   }
// } else if (x % 5 === 0) {
//   ans = "Buzz";
// } else {
//   ans = x;
// }
// console.log(ans);
// //
// let i;
// for (i = 1; i < 101; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

function fizzBuzz(currentNum, endNum) {
  for (; currentNum <= endNum; currentNum++) {
    if (currentNum % 15 === 0) {
      console.log("FizzBuzz");
    } else if (currentNum % 3 === 0) {
      console.log("Fizz");
    } else if (currentNum % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNum);
    }
  }
}
fizzBuzz(1, 100);
