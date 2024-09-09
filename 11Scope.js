// <------------------------- SCOPE ------------------------->


// node -----> global scope {}
// browser --> global scope Window {window: Window, self: Window, document: document, name: '', location: Location, …}


/*
if(true){
    let a = 10 ;
    const b = 20 ;
    var  c = 30 ;
}

console.log(a);     // a is not defined
console.log(b);     // b is not defined
console.log(b);     // c = 30 (It is bd practice)
*/



// <------------------------- NESTED SCOPE and CLOSER ------------------------->

// Closer --> Andar wala function bhar vale function ko access kar pata hai.

/*
function one(){
    let userone = "Abhishek"
    function two(){
        let usertwo = "Sachin"

        console.log("inner :", userone);    // inner : Abhishek
        console.log("inner :",usertwo);     // inner : Sachin
    }

    two()
    console.log("outer :", userone);       // outer : Abhishek
    console.log("outer :",usertwo);       // ReferenceError: usertwo is not defined
    
}

one()

console.log("global :", userone);       // ReferenceError: userone is not defined
console.log("global :",usertwo);        // ReferenceError: usertwo is not defined
*/

