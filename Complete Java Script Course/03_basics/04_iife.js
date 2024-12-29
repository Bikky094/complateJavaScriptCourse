// Immediately Invoked Function Expressions (IIFE)



// function chai(){
//     console.log(`DB Connected`);                 // This is a normal function
// }
// chai()



// (function chai(){
//     // This is a named IIFE
//     console.log(`DB Connected`);
// })();

// ()()            // First () definition  And Second () execution

// ((name)=>{
//     // This is a sample IIFE
//     console.log(`DB Connected two ${name}`)
// })('Bikky');




// ((myName)=>{
//     console.log(`my name is ${myName}`)
// })("Bikky")



// const addNameFunction = function(num1){
//         let num = num1 + 1
//         return num

// }

// console.log(addNameFunction(5))


function add(value){
    value = value + 1
    console.log(value)
    // return value

}
add()