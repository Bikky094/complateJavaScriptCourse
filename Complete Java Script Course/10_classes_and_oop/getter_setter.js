class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    } 
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password() {
        return `${this._password}BikkySingh`
    }
    set password(value){
        this._password = value

    }
}

const bikky = new User('B@BikkySingh.com', 'ABC')
console.log(bikky.email)