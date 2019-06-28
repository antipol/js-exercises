// Homemade MAP function

function myMap(myArr, callback) {
  let arr = [];
  for (let i = 0; i < myArr.length; i++) {
    arr.push(callback(myArr[i]));
  }
  return arr;
}

let someArr = [1, 2, 3, 4, 5];
console.log(myMap(someArr, (x) => x + 1));
//[2, 3, 4, 5, 6]


//homemade FILTER function
const myFilter = (array, callback) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
const numArr = [1, 2, 4, 10];
const filterCallback = item => item < 5;

console.log(myFilter(numArr, filterCallback));
//[1, 2, 4]


//Homemade REDUCE function;
const myReduce = (numArr, callback) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = callback(sum, numArr[i]);
  }
  return sum;
}

const reduceCallback = (total, current) => total + current;

console.log(myReduce(numArr, reduceCallback));




//
