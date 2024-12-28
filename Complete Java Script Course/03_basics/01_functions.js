
function namesForFunctions(){                       // This is Function definition and syntax
    console.log("B")
    console.log("i")
    console.log("k")
    console.log("k")
    console.log("y")
    
}

// namesForFunctions                                  // This is function reference without () Round Brackets
// namesForFunctions()                                // and This is Function execution with () Round Brackets



// (number1,number2)            ===  this is parameter of Function 
// (3,4)                        === This is arguments of function


// function addTowNumbers(number1,number2){
//     console.log(number1 + number2)
// }


function addTowNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTowNumbers(3,5)                                    

// console.log("Result :", result);




// addTowNumbers(3,"4")                                     
// addTowNumbers(3,"a")                                    
// addTowNumbers(3,null)                                     


// function loginUserMessage(username = "sam"){           ////////////////////
    // if(username === undefined){                          /////////////////////// 
 
        function loginUserMessage(username){
    if(!username){
        console.log('Please enter a username')
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Bikky"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


// **********************************************************************



function calculateCartPrice(val1, val2, val3, ...num1){                           // This is Rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 450))


const user = {
    username: "Bikky",
    price : 120
    // prices : 120
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price: 399
// })

let myNewArray = [200, 400, 500]

function returnSecondValue(getArray){
    console.log(`lounch new prices ${myNewArray}`)
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 500, 600, 1000]))