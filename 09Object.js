// <------------------------- OBJECTS ------------------------->

// We can store proprties and methods in objects.
// It work on Heap Memory

// 1st Way to declare object --> Singleton = Made through constructor.
// 1st Way to declare object by Singleton



/*
let obj1 = Object.create(null);                     // Compulsory --> Give null / undefind arrgument 
obj1.name = "Sachin";

console.log(obj1.name);
console.log(obj1["name"]);                         // 2nd Way to access/call data from object
*




// 2nd Way to declare object by Singleton



/*
let obj2 = new Object();
obj2.name = "Sachin";

console.log(obj2.name);
*/



// 2nd Way to declare object --> Non - Singleton = Made through Object Literal. It store data in key - pair value


/*
let sym = Symbol("Abhi1234")                    // How to store symbol in object
let obj3 ={
    name : "Scahin",
    stidentID :"123",
    [sym] : "Abhishek Yadav"
}                                                  

console.log(obj3.name);
console.log(obj3.stidentID);
console.log(obj3[sym]);                         // How to access/call Symbol
*/




// <------------------------- PROPERTIES AND METHODS OF OBJECTS ------------------------->



// Method No. - 1 :-

// Key : It give array of all keys.
// Values : It give array of all Vaues.
// Entries : It give array of all Key Value pair array.
// hasOwnProperty : Determines whether an object has a property with the specified name. (T/F)



/*
let obj3 ={
    name : "Scahin",
    studentID :"123",
    age : 21,
    email : "mail4sachinyadav@gmail.com",
}       

console.log(Object.keys(obj3));            // Output : [ 'name', 'stidentID', 'age', 'email' ]
console.log(Object.values(obj3));          // Output : [ 'Scahin', '123', 21, 'mail4sachinyadav@gmail.com' ]
console.log(Object.entries(obj3));         // Output : [ ['name','Scahin'], ['stidentID','123'], ['age',21], ['email','mail4sachinyadav@gmail.com'] ]
console.log(obj3.hasOwnProperty("name"));  // Output : true

obj3.marvelHeroes = "Iron Man"            // Store new Key value pair / Property
console.log(obj3.marvelHeroes);           // Output : Iron Man

obj3.marvelHeroes02 = function () {        // Object ke andar bhar se method/function kaise dale
    console.log("Iron Man");               // Output : Iron Man
    return 123;
}

obj3.marvelHeroes02()                       // Compulasury ---> It call the function
console.log(obj3);


obj3.name = "Abhishek Yadav";               //  Change the property and methods
console.log(obj3.name);                     // Output : Abhishek Yadav


Object.freeze(obj3);                        // Change karne nahi deta object me

obj3.name = "Sagar Shah";                
console.log(obj3.name);                      // No change applied
*/





// Method No. - 1 {Destructing of Object ---> Adding two objects into another object }



/*
let obj1 = {
    name : "Sagar Shah"
}

let obj2 = {
    email : "mail4sachinyadav@gmail.com",
}

let obj3 = {obj1,obj2};               // Type - 1
console.log(obj3);                   // Output :  {obj1:{ name: 'Sagar Shah' } ,obj2:{ email: 'mail4sachinyadav@gmail.com' }}


let obj4 ={...obj1,...obj2};         // Type - 2
console.log(obj4);                   // { name: 'Sagar Shah', email: 'mail4sachinyadav@gmail.com' }



let obj5 =Object.assign ({},obj1,obj2);          // Type - 3
console.log(obj5);                              // { name: 'Sagar Shah', email: 'mail4sachinyadav@gmail.com' }
*/



/*
let obj1 ={
    name : "Scahin",
    studentID :"123",
    age : 21,
    email : "mail4sachinyadav@gmail.com",
}       


let {name, studentID, age, email} = obj1

console.log(name);
console.log(studentID);
console.log(age);
console.log(email);

let {name : userNmae} = obj1
console.log(userNmae);
*/

