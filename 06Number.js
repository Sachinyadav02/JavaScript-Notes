// <------------------------- Number ------------------------->

// 2 Ways to declare number


/*
const num01 = 123 ;

console.log(num01);               // 123
console.log(typeof num01);        // number


const num02 = new Number(789)     // Declare through constructor object

console.log(num02);               // [Number: 789]
console.log(typeof num02);        // object
*/



// <------------------------- PROPERTIES AND Number ------------------------->




const num = 112307.856;

// console.log(num.toExponential(2));
// console.log(num.toFixed(6));
// console.log(num.toLocaleString("en-US"));
// console.log(num.toPrecision(6));
// console.log(num.toString().length);
// console.log(num.valueOf(2));


console.log(Number.isFinite(num));
console.log(Number.isInteger(num));
console.log(Number.isNaN(num));




