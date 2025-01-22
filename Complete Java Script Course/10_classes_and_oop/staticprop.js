class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return Math.floor(Math.random() *1000 +1)
    }
}

const bikky = new User('Bikky')
// console.log(bikky.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', "i@phone.com")
iphone.logMe()
console.log(iphone.createId())