// <------------------------- FUNCTIONS ------------------------->

// How to decalre and call function.


/*
function printName() {                      // Function Defination
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("E");
}


printName ;                        // Function Refrence

printName() ;                      // Function Call
*/


// How to pass Argument and Parameter

/*
function addNumber (num1,num2){               // num1 and num2 are Parameter (Kuch bhi pass kar skte hai)
    console.log(num1+num2);
}

addNumber(7,9);                              // 7 and 9 are Argument
*/



// Return ---> Function se output bhar bhej deta hai , fir hum usee kahi par bhi use kar skte hai .


/*
function name(username) {
    return username
}

let username = name ("Abhishek")
console.log("username :" ,username);

function repoCount(repo){
    return repo
}

let repo = repoCount(75)
console.log("repo :" ,repo);

function userRepo(repo,username) {
    console.log(repo,username);
}
    */




// Rest Parameter --> Bhut sare Argument ki le ke array return karta hai.


/*
function cartPrice(...itemPrice){
    return itemPrice
}

let finalCartprice = cartPrice(200,700,500,600);
console.log(finalCartprice);                            // Output : [ 200, 700, 500, 600 ]
*/


// <------------------------- FUNCTIONS EXPRESSION ------------------------->



/*
addone(10)                           // Function ko kahi bhi call kar skte hai.

function addone(num){
    console.log(num+1);
}
    */


/*
//store(10)                              // Output : ReferenceError: Cannot access 'store' before initialization

let store = function addone(num){
    console.log(num+1);
}

store(10)                               // Output : 11 
*/   





// <------------------------- this ------------------------->

// this --> Current context batata hai. It refer to global object.


/*
let jsuser ={
    userName : "Sachin",
    emailId : "mail4sachinyadav@gmail.com",

    login : function (){
        console.log(`${this.userName} just login`);    // Output : Sachin just login
        console.log(this);
    },
    th : console.log(this) ,
    
}


// jsuser.login()                     // Output : Sachin just login 
                                      //           { userName: 'Sachin', emailId: 'mail4sachinyadav@gmail.com', login: [Function: login]}

jsuser.userName = "Abhishek"
// jsuser.login()                   // Output :  Abhishek just login 
                                    //           { userName: 'Abhishek', emailId: 'mail4sachinyadav@gmail.com', login: [Function: login]}

jsuser.th                           // Output : {} --> Empty object
*/


// this in classical function  --> Function ke andar this se variable access nahi kar skte hai.

/*
function name(){
    let userName = "Sachin"
    console.log(this.userName);                // Output : undefined
    console.log(this);                        // Output : <ref *1> Object [global] (node ka gobal deta hai.)
}

name()
*/






// <------------------------- ARROW FUNCTION ------------------------->

// How to declear Arrow function

/*
let printName = (name) => {
    console.log(name);                   // Output : Sachin
}

printName("Sachin")
*/




// <------------------------- ARROW FUNCTION and this ------------------------->

/*
let printName = (name) => {
    console.log(this.name);               // Output : undefined
    console.log(this);                    // Output : { }
                    
}

printName("Sachin")
*/





// <------------------------- Explicit Return and Implicit Return ------------------------->



// Explicit Return --> Bata dena


/*
let aadone = (num) => {
    return num + 1                      // Explicit Return
}

let addNumber = aadone(15)
console.log(addNumber);
*/




// Implicit Return --> Bina bataye , Object pass kar sakte hai.


/*
let aadone = (num) => (num + 1)                 // Implicit Return

let addNumber = aadone(15)
console.log(addNumber);
*/






// <------------------------- IIFE ------------------------->

// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION

// Immediately function ko call karene ke liye 

// IIFE  ke bad ; lagna jaruri hai.


// Named IIFE

/*
(function connectedDB(userName){
        console.log(`DB is connected  ${userName}`);          // Output : DB is connected  Abhishek
    }
)("Abhishek");                                                // Function call and ;(Imp)


(function connectedDB2(userName){
        console.log(`DB2 is connected  ${userName}`);          // Output : DB is connected  Sachin
    }
)("Sachin");                                                  // Function call and ;(Imp)
*/




// UnNamed IIFE

/*
((userName)=>{
    console.log(`DB2 is connected  ${userName}`);          // Output : DB is connected  Sachin
})("Sachin"); 
*/