const mixed = [true, "foo", 233];

const cities = ["Rome", "Amsterdam", "Floripa", "Aleppo", "Kerkira"];

// find length
console.log(cities.length); //5

// find last item
console.log(cities[cities.length - 1]); //Kerkira

// find specific item in array, use [] notation
console.log(cities[0]); //Rome



// Array methods

// add item to end of Array
cities.push("Copenhagen");

// remove last item from array
cities.pop();

//remove first item in array
cities.shift();

// add item to the beginning of array
cities.unshift("Copenhagen");

// swap with bracket notation --- replace third element:
cities[2] = "Skagen";

// to reverse array
cities.reverse();

console.log(cities);






//Create a todo list
let todoList = ["Buy beer", "Water plants", "Make new outfit", "Walk dog", "Chill"];
const todoMessage = `You have ${todoList.length} things on your to do list!`

console.log(todoMessage);

console.log(`To do: ${todoList[0]}`);
console.log(`To do: ${todoList[todoList.length - 2]}`);

// replace the second item in your array
todoList[1] = "Build shelves";

// add a new item to the end
todoList.push("Do the laundry");

//remove the first item
todoList.shift();

console.log(todoList);



// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London","Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as avalue.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let favoriteCity = euroCities[1];
console.log(favoriteCity); //London

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); //5

// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.unshift("Budapest");
console.log(euroCities);

// 6. Use an array method to select item 3 from the array of euroCities and store this in another variable.
let worstCity = euroCities[2];
console.log(worstCity); //London

// 7. Replace the 3rd item in the array of euroCities with "Athens".
euroCities[2] = "Athens";
console.log(euroCities);

// 8. 10. Reverse the order of euroCities.
euroCities.reverse();
console.log(euroCities); //reverses array
euroCities.reverse();
console.log(euroCities); //reverses array back


let animals = ["tiger", ["cow", "pig", "horse"], "mouse", ["parrot", "chicken"]];
console.log(animals[1][2]); //horse
console.log(animals[3][1]); //chicken
console.log(animals[2]); //mouse
