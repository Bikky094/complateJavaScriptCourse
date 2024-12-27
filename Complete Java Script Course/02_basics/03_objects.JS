//  Singleton
// Object.create()          This is a constructor method



// object literals


const mySym = Symbol("key1")

const jsUser = {
    name: "BikkySingh",
    "full name": "Bikky Singh Chauhan",
    [mySym]: "key1",
    age : 19,
    location: "Gharsana",
    email: "Bikky@email.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"] 
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "BikkySingh@email.com"
// Object.freeze(jsUser)
jsUser.email = "BikkySingh@Chauhan.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name} `)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())