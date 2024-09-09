// <------------------------- ARRAYS ------------------------->

// Array is Non - Premitive , Heap Memory
// Array is a data stucture in which we store similar or dissimilar data.
// Array store data on 0 base indexing.

// How to declare Array ?

// 1st Way to declare array

/*
const myArray = ["Abhi" , 1 , null , true , undefined] ;
console.log(myArray);                                            // Output : [ 'Abhi', 1, null, true, undefined ]

console.log(myArray[3]);                                        // Output : true  (Access any element on the bases of thir index)
*/


// 2nd Way to declare array through constroctor (object)

/*
const mynewArray = new Array("Abhi" , 1 , null , true , undefined) ;
console.log(mynewArray); 
*/



// <------------------------- PROPERTIES AND METHODS OF ARRAY ------------------------->

// Property No. - 1  {No. Of element present in Array }

/*
const myArray = ["Abhi" , 1 , null , true , undefined] ;
console.log(myArray.length);                                   // Output : 5
*/


// Method No. - 2  {Adding and Removing of Elements in Array. It is mutation method}

// Adding in last

/*
const myArray = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray);                                   // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray.push("Siddharth");
console.log(myArray);                                   // Output : [ 'Abhi', 'Sagar', 'Raj', 'Siddharth' ]
*/


// Removing in Last

/*
const myArray2 = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray2);                                   // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray2.pop();
console.log(myArray2)                                    // Output :  [ 'Abhi', 'Sagar' ]
*/



// Addind and Removing in Start


/*
const myArray3 = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray3);                              // Output : [ 'Abhi', 'Sagar', 'Raj' ]

myArray3.unshift("Siddharth");                      // Adding
console.log(myArray3);                              // Output : [ 'Siddharth', 'Abhi', 'Sagar', 'Raj' ]

myArray3.shift();                                  // Removing
console.log(myArray3);                             // Output : [ 'Abhi', 'Sagar', 'Raj' ]
*/


// Method No. - 3  { Accessing Elements : We access element from array. It is Immutable}


// Indexof()

/*
const myArray = ["Abhi" , "Sagar" , "Raj"];
console.log(myArray);

let element = myArray.indexOf("Sagar");            // If present then it give index of that element. If not present give -1.
console.log(element);                              // Output : 1
console.log(myArray);                              // Immutate
*/



// lastIndexOf()

/*
const myArray1 = ["Abhi" , "Sagar" , "Raj" , "Sagar"];

let element1 = myArray1.lastIndexOf("Sagar");              // If present then it give last index of that element. If not present give -1.
console.log(element1);                                    // Output : 3
*/



// include()

/*
const myArray2 = ["Abhi" , "Sagar" , "Raj"];        

let element2 = myArray2.includes("Sagar");                   // It tell us presence and absence of element in T/F.
console.log(element2);                                       // Output : true
*/



// Method No. - 4   { slice() : Cut elements on the bases of index. It is Immutable }

/*
let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);                      // Output : [1,2,3,4,5,6,7,8,9]

let sliceArray = myArray.slice(2,7)
console.log(sliceArray);                    // Output : [ 3, 4, 5, 6, 7 ]

console.log(myArray);                   // Output : [1,2,3,4,5,6,7,8,9]
*/




// Method No. - 4  {Manipulating elements : It is Mutable}


//splice() : //Removes elements from array and, if necessary, inserts new elements in their place, returning the deleted elements

/*
let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);                                          // Output : [1,2,3,4,5,6,7,8,9]

let spliceArray = myArray.splice(2,7,"Sagar","Raj");           
console.log(spliceArray);                                      // Output : [ 3, 4, 5, 6, 7 ]

console.log(myArray);                                          // Output : [ 1, 2, 'Sagar', 'Raj' ]
*/



// reverse() : Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.


/*
let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);                                          // Output : [1,2,3,4,5,6,7,8,9]

let reverseArray = myArray.reverse();           
console.log(reverseArray);                                      // Output : [9, 8, 7, 6, 5, 4, 3, 2, 1]
*/


// sort() : { क्रम से लगाना } This method mutates the array and returns a reference to the same array. {Also work in Abcd}


/*
let myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(myArray);                                          // Output : [9, 8, 7, 6, 5, 4, 3, 2, 1]

let sortArray = myArray.sort();           
console.log(sortArray);                                      // Output : [1,2,3,4,5,6,7,8,9]
*/



// fil(What , Start ,End) : Changes all array elements from start to end index to a static value and returns the modified array.

/*
let myArray = [1,2,3,4,5,6,7,8,9]
console.log(myArray);                                          // Output : [1,2,3,4,5,6,7,8,9]

let fillArray = myArray.fill("Raj",4,7);           
console.log(fillArray);                                      // Output : [1,2,3,4,'Raj','Raj','Raj',8,9]
*/


// copywithin() : 



/*
let myArray = ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"]
console.log(myArray);                                             // Output : ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"]

let copyWithinArray = myArray.copyWithin(1,4,5);           
console.log(copyWithinArray);                                      // Output : [1,2,3,4,'Raj','Raj','Raj',8,9]
*/


// Method No. - 4  {Conversion of Array into String ---> It is Immutable}


/*
let myArray = ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"]
console.log(myArray);                                             // Output : ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"]

let convertedArray = myArray.join(",");
console.log(convertedArray);                                     // Output : Abhi,Siddhu,Raj,Sagar,Alok,Addi

console.log(myArray);                                            // Output : ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"]
*/








// <------------------------- ARRAYS ITERATION (LOOPS) ------------------------->

// For loop 

/*
let myArray = ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
    */ 




// <------------------------- ADVANCE CONCEPTS ------------------------->


let myArray = ["Abhi","Siddhu","Raj","Sagar","Alok","Addi"];


























