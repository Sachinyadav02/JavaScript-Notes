// <------------------------- STRING ------------------------->
// String is immutable

/*
let name = "Abhishek";
let repo = 5;

console.log(`My name is ${name} and repocount is ${repo}`);        // My name is Abhishek and repocount is 5 {Template Literals}
console.log(name,repo);                                            // Abhishek 5
*/

// String Index = Kis index par kon sa character hai

/*
let name = "Abhishek yadav"
console.log(name[5]);       // h
*/

// Proto = It give us property and methods of string

/*
let name = "Abhishek";
let repo = 5;

console.log(name.__proto__);     // Node ----> Empty object = {}   // Browser par sari properts and Methods deta hai
*/

// <------------------------- PROPERTIES AND METHODS OF STRING ------------------------->

let userName = "Abhishek";

console.log(userName.length);                // Length of string = 8 ------>(Poperty)
console.log(userName.toUpperCase());         // Change all character into upper case = ABHISHEK   ----->(Method)
console.log(userName.toLowerCase());         // Change all character into lower case = abhishek
console.log(userName.charAt(2));            // Returns the character at the specified index = h
console.log(userName.charCodeAt(0));        // Returns the character at the specified index. = 98 (Unicode / Ascii value)
console.log(userName.indexOf("b"));


