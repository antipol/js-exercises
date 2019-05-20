// ternary / conditional statements
let age = 15;
let beverage = age >= 16 ? "beer" : "juice";
console.log(beverage); //juice

// 1. Declare a variable named canDrive. Check if someone's age is over 18. If so, print 'yes, can drive' and if not, print 'no, too young!'
let canDrive = age >= 18 ? "yes, can drive" : "no, too young!";
console.log(canDrive); //no, too young!

// 2. Declare a variable named speedCheck. If speed is above 130km, print 'you're going too fast!'. If speed is lower than 130km, print 'You're driving below the speed limit'.
let speed = 210;
let speedCheck = speed >= 130 ? "you're going too fast!" : "You're driving below the speed limit";
console.log(speedCheck); //you're going too fast!

// 3. Declare a variable named personAge. If age is below 21, print "serve juice". Otherwise print "serve wine".
let personAge = 21;
let drink = personAge < 21 ? "serve juice" : "serve wine";
console.log(drink); //serve wine

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
let ticketPrice = isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(ticketPrice); //Ticket costs €5,00

// 5. Declare a variable named timeOfDay. Check if the time of day is 'morning' - if so, print "Good Morning". If not, print "Good Evening".
let timeOfDay = "morning";
let greeting = timeOfDay === "morning" ? "Good Morning" : "Good Evening";
console.log(greeting); //Good Morning
