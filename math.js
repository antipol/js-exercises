let num1 = 50;
let num2 = 100;

let val;

// pi
val = Math.PI;

// fixed floating point
val = Math.PI.toFixed(2); //3,14

// euleos number
val = Math.E; //euleos number

// round a number
val = Math.round(2.4999) //2

// round up, no matter what logic
val = Math.ceil(1.003); //2

// round down, no matter what logic
val = Math.floor(2.999); //2

// square root
val = Math.sqrt(16); //4

// absolute/positive number
val = Math.abs(-199); //199

// to the power
val = Math.pow(10, 3); //1000;

// min, gives smallest number
val = Math.min(23, 455, 10, -300); //-300

// max, gives the biggest number
val = Math.max(34, 788, -12); //788

// gives a random number between 0 and 1, new every time
val = Math.random();

val = Math.floor(Math.random() * 10 + 1);

console.log(val);
