// // Date object
//
// const now = Date();
// console.log(now); //gives you the date and time of now
// console.log(typeof now); //string
//
// const today = new Date();
// console.log(typeof today); //object
//
// // to check which month we're in right now
// const rightNow = new Date().getMonth() + 1;
// console.log(rightNow); //5
//
// // check year --- dont use getYear, returns 119
// const year = new Date().getFullYear();
// console.log(year); //2019
//
// // check time / hours
// const hours = new Date().getHours();
// console.log(hours); // number between 0 and 23
//
// const day = new Date().getDay();
// console.log(day); //4 = Thursday --- because sunday = 0
//
// const date = new Date().getDate();
// console.log(date); //23 because today is 23rd
//
// const setDate = new Date().setDate(22);
// console.log(setDate);


// 
// const month = new Date().getMonth();
// let season;
// if (month >= 2) {
//   season = "spring";
// } else if (month >= 5) {
//   season = "summer";
// } else if (month >= 8 <= 10) {
//   season = "autumn";
// } else {
//   season = "winter";
// }
// console.log(`It is ${season}!`);

const month = new Date().getMonth();
let season;
if (month >= 2 <= 4) {
  season = "spring";
} else if (month >= 5 <= 7) {
  season = "summer";
} else if (month >= 8 <= 10) {
  season = "autumn";
} else {
  season = "winter";
}
console.log(`It is ${season}!`);
