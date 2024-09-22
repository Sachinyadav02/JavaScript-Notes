# Scope in JS

- node ---> global scope {}
- browser ---> global scope Window {window: Window, self: Window, document: document, name: '', location: Location, …}

``` js
if(true){
       let a = 10
       const b = 20
       var c = 30
   }
   console.log(a)    // a is not defined
   console.log(b)    // b is not defined
   console.log(c)    // c = 30 (It is bd practice)
```

## Nested Scope

**Closer** --> The inner function can access the variables of the outer function.

``` js
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
```

## Interesting Problem

--> Declaring Function may be a problem

``` js
console.log(addone(5))          // Output : 6

function addone(num){
    return num + 1
}



console.log(addTwo(5))         // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}
```





