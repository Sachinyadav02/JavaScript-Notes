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

> [!NOTE]
> String is immutable ( something that cannot be changed. )

``` js
let name = "Abhishek";
let repo = 5;

console.log(`My name is ${name} and repocount is ${repo}`);        // My name is Abhishek and repocount is 5  {Template Literals}
console.log(name,repo);                                            // Abhishek 5
```

























