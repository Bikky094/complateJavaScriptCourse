// java  script mai data ko kese memory raha jata hai or kese accesse kiya hai us basis par
//  data type ki (2) categorys hai (1) primitive and (2) non-primitive or ise reference bhi bola jata hai

//primitive data type mai data banane ki bad hame us data ki copy milti hai or ham jo bhi changes karte hai us copy mai karte hai  




// *** primitive data types:=

//  == 7 types : (1) String ,  (2) Number ,  (3) Boolean ,  (4) Null ,  (5) undefined ,
//               (6) Symbol ,  (7) BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 2365147896545254n
console.log(typeof bigNumber)




// ***  Reference (Non-primitive)

// ==   (1). Array,  (2). Objects,   (3). Functions, 

const names = ["BikkySingh", "GurjantSingh", "Happy"];

let myObj = {
    name : "Bikky",
    age : 19,
}

 
const myFunction =  function hello(){
    console.log("Hello World")
}
console.log(typeof myFunction)
    