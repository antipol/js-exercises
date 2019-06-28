HIGHER ORDER FUNCTIONS


//FOR EACH METHOD

//the forEach methd executes a provided function once for each array element

//function output = (item, index, array)

const arr1 = [1, 2, 3, 4, 5];

arr1.forEach(number => console.log(number * 2)); // prints 5 rows, multiplies every element with 2

arr1.forEach(function(num, id) {
  console.log(`${id}: ${num}`);
}) //prints 5 rows, index : element/value

const stuff = ["my stuff", "random shit", "whatever", "your stuff"];
stuff.forEach((listItem, id) => console.log(`${id + 1} - ${listItem}`)); //prints 4 lines, 1 - my stuff ... etc

//FOR LOOP
const items = ["item1", "item2", "item3"];
let copy = [];
for(let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
//FOR EACH
items.forEach(item => copy.push(item));

console.log(copy); //For loop and forEach Method do the same thing in this case


const cities = ["Lima", "Montevideo", "Rio de Janeiro", "Sao Paolo", "Santiago"];
cities.forEach((city,index) => {
  if (city === "Sao Paolo") {
    city = city.toUpperCase();
  } else {
    city = city.toLowerCase();
  }
  console.log(index + 1, city);
}) //prints all in lower case, except Sao Paolo, uppper case

cities.forEach((city, index) => {
  if (city === "Montevideo") {
    return;
  }
  console.log(index + 1, city);
}) //prints all cities, except Montevideo

cities.forEach((city, index) => {
  if (index > 1) {
    return
  }
  console.log(index + 1, city);
}) //only prints index 0 and 1, two first cities



MAP method

Creates a new array with the results of calling a provided function on every element in the calling array.
The callback runs for each value in the calling array and returns each new value in the resulting array.
Keep in mind that the resulting array will always be the same length as the calling(original) array

const arr2 = [2, 4, 6, 8, 10];
const map1 = arr2.map(x => x * 2);
console.log(map1); //[4, 8, 12, 16, 20] --- multiplies every calling array element with 2


let arr3 = arr2.map(x => {
  if (x % 4 === 0) {
    console.log(x);
  } else {
    console.log(false);
  }
}) //false, 4, false, false, 8, false, false

let arr4 = arr2.map((val, index, array) => {
  return {
    index: index + 1,
    value: val
  }
});
console.log(arr4); //prints objects in array

let arr5 = arr2.map((val, index) => val % 2 === 0 ? val * 5 : val);
console.log(arr5); //multiplies each number with 5, cause they're all even


//FILTER method

//The filter() method creates a new array with all elements that pass the test implemented by the provided function

const coldWords = ["polar", "iceberg", "snow", "skiing", "frozen", "penguin"];
const result = coldWords.filter(word => word.length < 6);
console.log(result); //polar, snow

const numbers = [1, 5, 8, 10, 13];
const even = numbers.filter(nums => nums % 2 === 0);
console.log(even); //8, 10

let data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];

let countries = data.filter(val => {
  return val.population > 500000000;
})
console.log(countries); //shows array with objects China and India because they have more than half a billion people



//REDUCE method

//The reduce() method executes a reduce function (that we provide) on each element in an array, resulting in a single value (e.g. sum of array)

//let = result = array.reduce(callback)
//OPTIONALLY we can specify an initial value

//to SUM ALL VALUES IN ARRAY
const newArr = [1, 3, 5, 10];
const reducer = newArr.reduce((total, num) => total + num);
console.log(reducer); //19

const nums = [165, 44, 22, 8];
let solution = nums.reduce((acc, cur) => acc - cur);
console.log(solution); //91

//SPECIFYING an INITIAL VALUE
let sum = nums.reduce((acc, cur) => acc + cur, 100)
console.log(sum); //339

const names = ["Kim", "Bob", "Frank", "Pia", "Frank", "Kim", "Bob"];
const countInstances = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++ //increments the existing property
  } else {
    allNames[name] = 1 //creates a property and assigns the value of 1
  }
  return allNames;
}, {}) //initial value is empty object, so the result will become an object

console.log(countInstances);

//OR as for loop:

const countedNames = {};
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  if (countedNames[name] != null) {
    countedNames[name]++;
  } else {
    countedNames[name] = 1;
  }
}
console.log(countedNames);
