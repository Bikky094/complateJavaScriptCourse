const user = {
    username: "Bikky",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`)
        console.log(this)

    }


}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)


// const promiseOne = new Promise()           //   (new) Word hi Constructor function hai 
// const data = new Date()



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Walcome ${this.username}`)
    }

     return this

}

const userOne = new User("Bikky", 12, true)
const userTwo = new User("BikkySingh", 8, false)

console.log(userOne.constructor)
// console.log(userTwo)

//    *** first Step ==  (new)  key Word ka user karne hi hame ik empty Object milta hai. jise instance boloa jata hai

//  ***  Second Step ==   ye jo Constructor function hai jab ye call hota hai to ye (new)  keyword se call hota hai, aab ye hamare sare arguments vegera pack karta hai or hame de deta hai 

//   ***   Thred Step == mai jo hamara (this) keyword hai or hame ne jo bhi argument likhe hai vo sare (this) word mai add ho jate hai  

// *** Four Step  ==  mai hame mil jate hai. function ke ander