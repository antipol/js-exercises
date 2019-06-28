//CALBACK FUNCTIONS

//A callback function is a function paased into another function as an argument
//Which is then invoked outside the outer function to complete some sort of routine or action.
//A function that accepts other functions as arguments is called HIGHER ORDER FUNCTION which contains the logic for when the callback function gets executed.

//A function is a value representing an "action"
//Regular values like strings or numbers represent the data
//A function can be perceived as an action
//We can pass it between variables and run it when we want

//=============================================================

//WHY WE NEED CALLBACK FUNCTIONS

function first() {
  console.log(1);
}

function second() {
  console.log(2);
}

first(); //1
second(); //2

//BUT.......

function firstFunc() {
  //simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 1000);
}

function secondFunc() {
  console.log(2);
}

firstFunc(); //logs 1 after 1 second (1000 miliseconds)
secondFunc(); //2 (logs before 1 because of the setTimeout)
//So:
//2
//1

//Even though we invoked the firstFunc() first, we only saw the result under secondFunc()
//Javascript continues loading even if some functions are waiting (e.g. setTimeout), and will return result when it's ready

//YOU CAN NOT JUST CALL ONE FUNCTION AFTER ANOTHER AND HOPE THEY EXECUTE IN THE RIGHT ORDER

//Callbacks are a way to make sure certain code doesn't execute until another code has finished its execution

// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework`);
// }
//
// doHomework("geometry") //Starting my geometry homework

//--------------------------------------


function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework`);
  callback();
}

function alertFinished() {
  setTimeout(function() {
    console.log('Finished my homework')
  }, 500);
}

doHomework("physics", alertFinished)
// Starting my physics homework
// finished my homework (after 0.5 second)
