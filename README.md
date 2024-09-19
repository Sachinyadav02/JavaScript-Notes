# JavaScript - Notes 

## What is JavaScript ?

JavaScript is an object oreiented , general purpose and high level programming language used in wesite's frontend , banckend and software application.

## Variables
 The name of memory location that we use to store data.
 
![Variable in JS 2](https://github.com/user-attachments/assets/c2a0c0a1-e976-4583-ac15-f6ed5243f71d)

### Types of Variables

There are 3 types of Variables.

- **let**
- **const** ==> (ERROR assignment to const variable (Can't change variables once value is assigned))
- **var**
>  [!WARNING]
> Prefer not to use var because of issue in block scope and functional scope

## Data Type

It specifies the type of data that the variable can store.

### Types of Data Type

Data types are  divided into two categories.

### 1. Premitive Data Type 

**Call by value** ( When called, a copy is returned.)

- Number --> range (2<sup>53</sup>)
- Bigint --> `const num = 123456789n`
- Boolean --> true/false
- String --> " "
- Null --> standalone value &nbsp; &nbsp;`**typeof -->object**`
- Undefined --> A variable that has not been assigned a value is undefined.&nbsp; &nbsp; ` **typeof --> undefined**`
- Symbol --> unique

### 2. Non - Premitive Data Type 

**Reference** (call by reference ( When called, an address is returned.))

- Object &nbsp; &nbsp; &nbsp; `**typeof --> object`
- Array &nbsp; &nbsp; &nbsp; `**typeof --> object`
- Function &nbsp; &nbsp; `**typeof --> function`

## Conversion

**Type Conversion** = To convert one type of data into another type of data.

``` js
     let score =                         "77" || "77abc" || null || undefined
     let valueINNumber = Number(score)   ----    --------   ----    ---------
     console.log(valueINNumber)          77  ||   NaN   ||  0   ||   NaN

     let isLoggedIn =                               1    ||   0   || "sidd" || ""                        
     let booleanIsLoggedIn = Boolean(isLoggedIn)    ---     -----    ------    ---
     console.log(booleanIsLoggedIn)                 true || false ||  true  || false
```

## Arithmetic Operators in JS

To perform mathematical calculation between variables and values.

**Arithmetic Operators -->** &nbsp; &nbsp;   + , - , / , * , ** , %

** --> Exponential Operator &nbsp; &nbsp; { 2**5 = 2<sup>5</sup> }  
% --> Modulus Operator  &nbsp; &nbsp;{ To find the remainder }

![Operator2 (1)](https://github.com/user-attachments/assets/643b614f-74cf-4908-a370-97c6d4f7a5a6)

> [!NOTE]
> No operator is assumed to be present.  
> Example -->  
> a = xy ----> Invalid  
> a = x * y ----> Valid

``` js
console.log(+true);     // 1
console.log(true+);     // error
console.log(+"");       // 0
```

## Comparison Operators

To determine equality or difference between variables or values.

**Arithmetic Operators -->** &nbsp; &nbsp; < , > , <= , >= , == , !=

``` js
console.log("2" > 1);          //true
console.log("02" > 1);         //true
console.log(null > 0);         //false
console.log(null == 0);        //false
console.log(null >= 0);        //true
console.log(undefined > 0);    //false
console.log(undefined == 0);   //false
console.log(undefined >= 0);   //false
```

> [!NOTE]
> **===** --> Strict Check

## Stack and Heap Memory Allocation in JS

### 1. Stack Memory
* A Stack is a linear data structure that follows a particular order in which the operations are performed.  
* The order may be LIFO(Last In First Out) or FILO(First In Last Out).  
* Primitive(copy) values (like strings and numbers) and references to objects are stored in the stack mem

``` js
let name = "Abhi";
let anothername = name;

console.log(name);                  // Abhi
console.log(anothername);           // Abhi

anothername = "Sachin"

console.log(name);                  // Abhi
console.log(anothername);           // Sachin
```
**<------------------------- STACK DIAGRAM ------------------------->**

### 1. Heap Memory

* It is used to store objects and functions in JavaScript.  
* The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.
* Non Primitive (References) Objects and complex data structures are stored in the heap memory.

``` js
let user = {
    name : "Abhi" ,
    studentId : 123456 }

let anotheruser = user ;

console.log("User name :",user.name);                                     // User name : Abhi
console.log("User StudentId :",user.studentId);                           // User StudentId : 123456

console.log("anotherUser name :",anotheruser.name);                       // anotherUser name : Abhi
console.log("anotherUser StudentId :",anotheruser.studentId);             // anotherUser StudentId : 123456


anotheruser.name = "Sachin";                                             
anotheruser.studentId = 789456;


console.log("User name :",user.name);                                      // User name : Sachin
console.log("User StudentId :",user.studentId);                            // User StudentId : 789456

console.log("anotherUser name :",anotheruser.name);                        // anotherUser name : Sachin 
console.log("anotherUser StudentId :",anotheruser.studentId);              // anotherUser StudentId : 789456
```
**<------------------------- HEAP DIAGRAM ------------------------->**

## String

**Declaring of String**

``` js
let name = "Abhishek";
let repo = 5;

console.log(`My name is ${name} and repocount is ${repo}`);      // My name is Abhishek and repocount is 5  {Template Literals}
console.log(name,repo);                                          // Abhishek 5
```

**String Index** = which character is at which index.

``` js
let name = new String("Abhishek yadav")
console.log(name[5]);       // h
```

**Proto** = It give us property and methods of string.

``` js
let name = "Abhishek";
let repo = 5;

console.log(name.__proto__);     // Node ----> Empty object = {}
                                 // Browser par sari properts and Methods deta hai
```

**Properties and Methods of String** 

``` js
let userName = "Abhishek";

console.log(userName.length);                // Length of string = 8 ------>(Poperty)
console.log(userName.toUpperCase());         // Change all character into upper case = ABHISHEK   ----->(Method)
console.log(userName.toLowerCase());         // Change all character into lower case = abhishek
console.log(userName.charAt(2));            // Returns the character at the specified index = h
console.log(userName.charCodeAt(0));        // Returns the character at the specified index. = 98 (Unicode / Ascii value)
console.log(userName.indexOf("b"));         // Returns the position of the first occurrence of a substring = 1
```

> [!NOTE]
> String is immutable ( something that cannot be changed. )
> ``` js
> let name = "Sachin Yadav"
> console.log(name);         // Sachin Yadav
>
> name[0] = "A"
> console.log(name);        // Sachin Yadav
> ```

## Numbers

**Declaring of Numbers** &nbsp; --> 2 Ways to declare Numbers in JS.  

--> 1st Way to declare Number

``` js
const score = 400
console.log(score)         // 400   {typeof = number}
```
--> 2nd Way to declare Number

``` js
const balance = new Number(100)
console.log(balance)        // node [Number: 400]  // browser Number {400} [[Prototype]]: Number [[PrimitiveValue]]: 400
```

**Methods in Numbers**

``` js
const num = 112307.856;

console.log(num.toExponential(5));              // 1.12308e+5
console.log(num.toFixed(6));                    // 112307.856000
console.log(num.toLocaleString("en-US"));       // 112,307.856
console.log(num.toPrecision(6));                // 112308
console.log(num.toString().length);             // 10
console.log(num.valueOf(2));                    // 112307.856
```

**Checking if values are finite, integers, or NaN**

``` js
const num = 112307.856;

console.log(Number.isFinite(num));               // true
console.log(Number.isInteger(num));              // false
console.log(Number.isNaN(num));                  // false
```

## Maths

- It is used to perform mathematical operations on numbers.
- It is Object.

``` js
      console.log(Math);                 // node Object [Math] {}  // browser Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

      console.log(Math.abs(-4));         //  4
      console.log(Math.round(4.6))       //  5
      console.log(Math.ceil(4.2))        //  5
      console.log(Math.floor(4.9))       //  4
      console.log(Math.min(4,3,7))       //  3
      console.log(Math.max(7,9,2))       //  9

      console.log(Math.random())         //  return random number between 0 and 1
      console.log(Math.random()*10)      //  return random number between 1 and 10
      console.log((Math.random()*10)+1)
      console.log(Math.floor(Math.ramdom()*10)+1))  // return without decimal  
```

> [!TIP]
> **FORMULA** &nbsp; --> Random values between any two numbers
> 
> ``` js
> const min = 10
> const max = 20
> Math.floor(Math.random()*(max-min+1))+min       // return random number between 10 to 20
> ```

## Dates

- It is Object in JavaScript.  
- Month in JavaScript starts with Zero (0).

```js

   let myDate = new Date()
   console.log(typeof myDate)            // object
   console.log(myDate);                  // 2024-08-25T06:20:03.401Z
   console.log(myDate.toString());       // Sun Aug 25 2024 11:51:40 GMT+0530 (India Standard Time)
   console.log(myDate.toDateString());   // Sun Aug 25 2024
   console.log(myDate.toLocaleString()); // 25/8/2024, 11:54:33 am

   let myCreatedDate = new Date(2023,0(month),24)
   console.log(myCreatedDate)            // 2023-01-23T18:30:00.000Z

   let myTimeStamp = Date.now()
   console.log(myTimeStamp)              // 1724567383704 (in millisecond from January 1, 1970, UTC)
   console.log(myCreatedDate.getTime())  // 1674498600000 (in millisecond from January 1, 1970, UTC)
 
   console.log(Math.floor(Date.now()/1000(second)))  // 1724567740 (time in second)

   let newDate = new Date()
   console.log(newDate);                  //  2024-08-25T06:37:56.966Z
   console.log(newDate.getMonth())        //  7

   newDate.toLocaleString('default',{weekday: "long"})
```

## Arrays

- Array is a data stucture in which we storing a collection of multiple items under a single variable name.
- JS Arrays are resizable and can contain a mix of different data types.
- It is Non - Primitive data type.
- It is Heap Memory.
- Array store data on 0 base indexing.

**Declaring of Arrays** &nbsp; --> 2 Ways to declare Arrays in JS.

--> 1st Way to declare Array

``` js
const myArray = ["Abhi" , 1 , null , true , undefined] ;
console.log(myArray);                                        // Output : [ 'Abhi', 1, null, true, undefined ]

console.log(myArray[3]);                                    // Output : true  (Access any element on the bases of thir index)
```

--> 2nd Way to declare Array through constroctor (object)

``` js
const mynewArray = new Array("Abhi" , 1 , null , true , undefined) ;
console.log(mynewArray);                                   // Output : [ 'Abhi', 1, null, true, undefined ]
```

### Properties and Methods of Array

**(i)** No. of element present in Array

``` js
const myArray = ["Abhi" , 1 , null , true , undefined] ;
console.log(myArray.length);                                   // Output : 5
```

**(ii)** Adding and Removing of Elements in Array

- It is mutation (Changable) method

**(a)** Adding of Elements in Last

``` js
const myArray = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray);                                   // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray.push("Siddharth");
console.log(myArray);                                   // Output : [ 'Abhi', 'Sagar', 'Raj', 'Siddharth' ]
```

**(b)** Removing of Elements in Last

``` js
const myArray2 = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray2);                                   // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray2.pop();
console.log(myArray2)                                    // Output :  [ 'Abhi', 'Sagar' ]
```

**(c)** Adding and Removing of Elements in Start

``` js
const myArray3 = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray3);                              // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray3.unshift("Siddharth");                      // Adding
console.log(myArray3);                              // Output : [ 'Siddharth', 'Abhi', 'Sagar', 'Raj' ]

myArray3.shift();                                  // Removing
console.log(myArray3);                             // Output : [ 'Abhi', 'Sagar', 'Raj' ]
```

**(iii)** Accessing Elements

- It is Immutation (Unchangeable) method

**(a)** indexof() --> If present then it give index of that element. If not present give -1.  
**(b)** lastIndexOf() --> If present then it give last index of that element. If not present give -1.  
**(c)** include() --> It tell us presence and absence of element in T/F.  

``` js
const myArray = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray);

let element = myArray.indexOf("Sagar");
console.log(element);                                 // Output : 1

let element1 = myArray1.lastIndexOf("Sagar");
console.log(element1);                                // Output : 3

let element2 = myArray2.includes("Sagar");
console.log(element2);                                // Output : true
```



















