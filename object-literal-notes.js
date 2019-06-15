// OBJECT LITERALS

const person = {
  // key: value,
  name: "Trine",
  age: 30,
  pet: "Billy",
  address: {
    //nested object
    street: "Franz-Mett-Str.",
    plz: 10319,
    city: "Berlin"
  },
  lovesCoding: true
};

// to access something in an object:
// dot notation
// let myAge = person.age;
// console.log(myAge); //30
//
// to access nested object literal
// let myPlz = person.address.plz;
// console.log(myPlz); //10319

console.log(`My name is ${person.name}, I'm ${person.age} years old and I live in ${person.address.city}`);
person.age = 17;
person.address.city = "New York";
console.log(`My name is ${person.name}, I'm ${person.age} years old and I live in ${person.address.city}`);


const movies = {
  title: "Amadeus",
  director: "Milos Forman",
  releaseYear: 1984
}
// console.log(`${movies.title} directed by ${movies.director}`); //Amadeus directed by Milos Forman

// change value for specific keyword in object literal
// movies.title = "Man on the Moon";
// console.log(`${movies.title} directed by ${movies.director}`); //Man on the Moon directed by Milos Forman

const movieList = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  yearReleased: 1972,
  basedOnBook: true
}

const movieList2 = {
  title: "Mama Roma",
  director: "Pier Pasolini",
  yearReleased: 1962,
}

const getMovies = function(movie) {
  console.log(`${movie.title} directed by ${movie.director}`);
}

getMovies(movieList); //The Godfather ...
getMovies(movieList2); //Mama Roma ...

//to get keys from specific object
// Object.keys method
console.log(Object.keys(movieList2)); // [title, director, yearReleased]
