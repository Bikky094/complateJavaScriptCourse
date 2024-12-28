const user = {
    username: "BikkySingh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Walcome to website and  price ${this.price}`)
        console.log(this)
    }

    
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "Bikky"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     // let username = "Bikky"
//     console.log(this)
// }


const chai = ()=>{
    // let username = "Bikky"
    console.log(this)
}

// chai()



// const addTwo = (num1, num2) =>{             //////   This is a arrow function
//     return num1 + num2
// }



/////  in the implicit return arrow function
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "BikkySingh"})


console.log(addTwo(5, 6))



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()