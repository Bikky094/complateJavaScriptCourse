function SetUsername(username){
    // complex BD calss
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new createUser('BikkySingh', "Bikky@email.com", '6378696554')

console.log(chai)