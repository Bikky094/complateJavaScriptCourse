//        {}           curly braces ko hi scope kaha jata hai             

// var c = 300
let a = 300


//                                                        //      Global Scope
if(true){
    let a = 10                                            //      block Scope 
    const b = 20    
    // var c = 30   
    c = 30
    // console.log("INNER: ", a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b)
// console.log(c)









// ****************************************************************************



function allCars(){
    const first_car = "BMW M4"
    const Second_car = "Supra mk4"

    function fast_cars(){
        const firstCarsSpeed = "300"
        const SecondCarsSpeed = "300"
        console.log(first_car)
        console.log(Second_car)
    }
    console.log(firstCarsSpeed)
    console.log(SecondCarsSpeed)


    fast_cars()
    

    
    
}

// allCars()








if(true){
    const name = "BikkySingh "
    if(name === "BikkySingh"){
        const work_name = " Youtube"
        const new_name = name + work_name
        console.log(new_name)
    }
    // console.log(work_name)

}

// console.log(name)



// *************************   interesting  *****************************


console.log(addOne(2))
function addOne(x){
    return x + 1
}



const addTwo = function(){
    return + 2
}
addTwo(5)

// addTwo(5)
// const addTwo = function(){
//     return + 2
// }














// Y = (x)=>(x+1)
// console.log(Y(2))

// hello = (x) => {
//     return x + 2;
//   }

// console.log(hello(2))

// Bikky = (num) =>{
//      num + 1
//     //  console.log(num +1)
// }

// Bikky(2)