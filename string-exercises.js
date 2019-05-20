// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let park = "I can walk in the park all day!";
console.log(park.substring(18, 22)); //park

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let programmingLanguage = "JavaScript";
console.log(programmingLanguage.substring(3, 6)); //aSc

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let message = "Hello World";
console.log(message.toUpperCase()); //HELLO WORLD

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let greeting = "Hello Earthling";
console.log(greeting.toLowerCase()); //hello earthling

// 5. Check if the sentence "nice shoes" contains the letter l or n.
let shoes = "nice shoes";
console.log(shoes.match("n"), shoes.match("l")); // ...yes... and null

// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
let str = "Whales are nice";
let first = str.charAt(0);
str = first + str + first;
console.log(str); //WWhales are niceW

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let strTwo = "helicopter";
// console.log(strTwo.length); //10
let lastLetters = strTwo.substring(strTwo.length - 3, strTwo.length)
strTwo = lastLetters + strTwo + lastLetters;
console.log(strTwo); //terhelicopterter

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
let strThree = "Javascript";
strThree = strThree.toUpperCase();
console.log(strThree.includes("Java")); //false

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
let fear = "Moose";
let fearFirst = fear.charAt(0);
let fearMid = fear.substring(1, 4);
let fearLast = fear.charAt(4);
let ans = fearLast + fearMid + fearFirst;
console.log(ans); //eoosM

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "Trine";
let pet = "Billy";
let favoriteColor = "rainbow";
console.log(`My name is ${firstName}, my dog is called ${pet} and my favorite color is ${favoriteColor}.`);

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let text = "the quick brown fox";
console.log(text.charAt(0).toUpperCase() + text.substring(1));
