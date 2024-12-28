// Immediately Invoked Function Expressions (IIFE)



// function chai(){
//     console.log(`DB Connected`);                 // This is a normal function
// }
// chai()



(function chai(){
    // This is a named IIFE
    console.log(`DB Connected`);
})();

// ()()            // First () definition  And Second () execution

((name)=>{
    // This is a sample IIFE
    console.log(`DB Connected two ${name}`)
})('Bikky')