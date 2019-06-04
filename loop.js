let maxWeight = 10000;
let weightIncluded = 0;
let id = 1;
let weightNextContainer = 10;

// for (; maxWeight >= weightIncluded + weightNextContainer; id++) {
//   if (id <= 100) {
//     weightIncluded += 10;
//     id === 100 ? weightNextContainer = 20 : weightNextContainer = 10;
//   } else if (id <= 200) {
//     weightIncluded += 20;
//     id === 200 ? weightNextContainer = 50 : weightNextContainer = 20;
//   } else if (id <= 250) {
//     weightIncluded += 50;
//     id === 250 ? weightNextContainer = 100 : weightNextContainer = 50;
//   } else if (id <= 300) {
//     weightIncluded += 100;
//     id === 300 ? weightNextContainer = 200 : weightNextContainer = 100;
//   } else if (id <= 400) {
//     weightIncluded += 200;
//     id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
//   } else {
//     weightIncluded += 500;
//     weightNextContainer = 500;
//   }
// }
// console.log(id);
// console.log(weightIncluded);
// console.log(weightNextContainer);

while (maxWeight >= weightIncluded + weightNextContainer) {
  if (id <= 100) {
    weightIncluded += 10;
    id === 100 ? weightNextContainer = 20 : weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    id === 200 ? weightNextContainer = 50 : weightNextContainer = 20;
  } else if (id <= 250) {
    weightIncluded += 50;
    id === 250 ? weightNextContainer = 100 : weightNextContainer = 50;
  } else if (id <= 300) {
    weightIncluded += 100;
    id === 300 ? weightNextContainer = 200 : weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }
  id++;
}
console.log(id);
console.log(weightIncluded);
console.log(weightNextContainer);

let num = 1;

while (num < 101) {
  if (num % num !=  0) {
    console.log(num);
  } else {
    console.log("prime");
  }
  num++;
}
