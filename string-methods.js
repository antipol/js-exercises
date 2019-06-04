const firstName = "Horst";
const lastName = "Schuhmacher";
const age = 28;
let str = "Welcome to the universe";

let val;

val = firstName + lastName; //HorstSchuhmacher

// concatenation
val = firstName + " " + lastName; //Horst Schuhmacher

// template strings / template literals using backticks
val = `My first name is ${firstName} and my last name is ${lastName}.` //My first name is Horst and my last name is Schuhmacher.

// append, calculate on the right first, new value gets reassigned to the variable
val = "Hildegard";
val += " Smith"; //Hildegard Smith

// length
val = firstName.length; //5

// concatenation
val = firstName.concat(" ", lastName); //Horst Schuhmacher

// change case
val = firstName.toUpperCase(); // HORST
val = firstName.toLowerCase(); //horst

// indexOf
val = firstName.indexOf("o"); //1
val = lastName.lastIndexOf("h"); //8

// charAt()
val = firstName.charAt(2) //r
val = firstName[2]; //r

// get last character
val = firstName.charAt(firstName.length - 1); //t

// substring() Takes from 0 and to but not including 2
val = firstName.substring(0, 2); //Ho

// slice() used more on arrays
val = firstName.slice(0, 4); //Hors

// replace() --- replaces first word with the second
val = str.replace("the", "this"); //Welcome to this universe (this instead of the)

// match() --- tells you where in the string to find it
val = str.match("to"); //index 8 ... etc

// includes() --- boolean value
val = str.includes("universe"); //true

console.log(val);



//Number("str")
//converts string into Number

// String(10)
// converts number into string
