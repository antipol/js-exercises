// Array methods

const africanCities = ["Lagos", "Kinshasa", "Alexandria", "Mogadishu"];
const asianCities = ["Busan", "Taipei", "Kuala Lumpur", "Osaka"];
const myNums = [87, 15, 100, 2076, 999];

//To check if something is an array:
// isArray Method
// console.log(Array.isArray(asianCities)); //true

//to add something to end of array:
// push method
// asianCities.push("Bangkok"); // adds Bangkok to end of array

//to add to front of array:
// unshift method
// africanCities.unshift("Dar Es Salaam"); //adds city to front of array

//to remove from end of array:
// pop method
// myNums.pop(); //removes 999

//to remove first element of array:
// shift method
// myNums.shift(); //removes 87;

//to remove anywhere (e.g. in the middle of an array):
// splice(start, stop) method
// console.log(asianCities.splice(1, 1)); // removes Taipei
// console.log(asianCities); // prints the new array without Taipei
//
// console.log(asianCities.splice(1, 1, "Beijing")); // removes Taipei, adds Beijing instead
// console.log(asianCities); // prints the new array with Beijing instead of Taipei

//to grab part of array:
// slice method
// console.log(africanCities.slice(0, 2)); //returns first two elements of the array

//concatenate arrays:
// concat method
// const worldCities = asianCities.concat(africanCities);
// console.log(worldCities); //prints all cities in one array
// // spread syntax //new in ES6
// const worldCities = [...asianCities, ...africanCities];
// console.log(worldCities); //prints all cities in one array

//sorting arrays:
// sort method
// console.log(worldCities.sort()); //returns elements sorted in alphabetical order
//works for strings
// to sort numbers:
// val = myNums.sort(function(x, y) {
//   return x - y
// })
// console.log(val); // to sort numbers from small to big
//
// val = myNums.sort(function(x, y) {
//   return y - x
// })
// console.log(val); // to sort numbers from big to small

//to reverse an array:
// reverse method
// console.log(asianCities.reverse());

//turn array into a string
// toString method
// console.log(africanCities.toString());
