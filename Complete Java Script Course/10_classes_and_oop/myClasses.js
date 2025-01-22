//    ES6   ==   Ham jo bhi java script use kar kare hai . vo ES6 ke bad ki hai 


// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     mypassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User('Bikky', 'bikky@gmail.com', '325698741')
// console.log(chai.mypassword())
// console.log(chai.changeUsername())





//        behind the scene              ===        ^     ye kam function mai




function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password

}


User.prototype.mypassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User('BikkySingh', 'bikkySingh@gmail.com', '3322665698')
console.log(tea.mypassword())
console.log(tea.changeUsername())


