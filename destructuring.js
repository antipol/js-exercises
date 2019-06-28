The destructuring assignment syntax is a Javascript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables

REST IN ARRAY DESTRUCTURING
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); //10
console.log(b); //20
console.log(rest); //[30, 40, 50]

const x = [1, 2, 3, 4, 5];
let [y, z, w] = x;
//grabbing the first three numbers of the x variable:
console.log(y); //1
console.log(z); //2
console.log(w); //3


ASSIGNMENT SEPERATE FOM DECLARATION
let a, b;
[a, b] = [1, 2];
console.log(a); //1
console.log(b); //2


DEFAULT VALUES
let a, b;
[a = 5, b = 7] = [, 10];
console.log(a, b); //5 10


SWAPPING VARIABLES
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b); //3 1


ASSIGNING THE REST OF AN ARRAY TO A VARIABLE
const [a, ...b] = [1, 2, 3];
console.log(b); //2, 3


OBJECT DESTRUCTURING
const lunch = {
  Adrian: "mineral water",
  Nizar: "hummus",
  Richard: "potato salad"
}
const {Adrian, Nizar, Richard} = lunch;
console.log(Adrian, Nizar, Richard); //mineral water hummus potato salad

const o = {p: 42, q: true};
let {p, q} = o;
console.log(p, q); //42 true


ASSIGNMENT WITHOUT DECLARATION
// A variable can be assigned its value with destructuring separate from its declaration
let a, b;
({a, b} = {a: 1, b: 2});
console.log(a, b); //1 2


ASSIGNING TO NEW VARIABLE NAMES
// A property can be unpacked from an object and assigned to a variable with a different name than the object property
const o = {p: 42, q: false};
const {p: foo, q: baz} = o;
console.log(foo); //42
console.log(baz); //false

COMBINED ARRAY AND OBJECT DESTRUCTURING
const props = [
  {id: 1, name: "Fizz"},
  {id: 2, name: "Buzz"},
  {id: 3, name: "FizzBuzz"}
];
const [,, {name}] = props;
console.log(name); //FizzBuzz
