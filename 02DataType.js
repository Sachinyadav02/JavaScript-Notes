// <----------------------------x---------------- PREMITIVE DATATYPE (Call by value)----------------x---------------------------->




//Number -----> Range = 2**53 (** for power)

/*
const num = 256
console.log(num);

console.log(typeof num);        // typeof -----> To check datatype.   // Output ---> number
*/

//String  -------> " " or ' '

/*
let name = "Abhi"
console.log(name);

console.log(typeof (num));        // Output ---> string
*/




//Boolean  -------> True or False

/*
let isLogin = true 
console.log(isLogin);            // Semicolon is not compsulary.    // Output ---> true

console.log(typeof isLogin);     // Output ---> boolean
*/

//bigInt  ---------> It is used for big numbers

/*
const num = 78999999591518954164164n                 // n is complusary otherwise it give wrong output
console.log(num);

console.log(typeof num);                            // Output ---> bigint
*/




//Null ----------------> It is standalone value. We can not compare it with 0. It is object.

/*
const num = null                    
console.log(num);                  // Output ------> null

console.log(typeof num);           // Output ------> object (important)
*/

//Undefined  ---------------> Itself a datatype

/*
let num ;
console.log(num);                  // Output ------> undefined

console.log(typeof num);           // Output ------> undefined
*/



//Symbol ------------> It is use for uniqueness.

/*
let sym1 = Symbol("Abhi");                 // Syntax
let sym2 = Symbol("Alok");
let sym3 = Symbol("Abhi");
let sym4 = "Abhi";
let sym5 = "Abhi";


console.log(sym1);                      // Output ------> Abhi
console.log(sym2);                      // Output ------> Alok
console.log(sym3);                      // Output ------> Abhi

console.log(sym1 == sym3);              // Output ------> false
console.log(sym4 == sym5);              // Output ------> true

console.log(typeof sym1);               // Output ------> symbol
*/





// <----------------------------x---------------- NON - PREMITIVE DATATYPE (Reference)----------------x---------------------------->
//     Overview

// Array --------------> [ "name" , 753 , null , true]   ------------> We can store any type of datatype.


// Object 


/*
const obj = { 
    name : "Abhishek"
}
    */




// Function ----------->  To do the same job over and over again.


/*
function name () {
    console.log("Abhishek");
}
    */