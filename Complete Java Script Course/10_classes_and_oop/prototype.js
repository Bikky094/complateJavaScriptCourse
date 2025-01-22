// let myName = "Bikky     "
// let mychannel = "Bikkycars      "
// // console.log(myName.truelength)
// console.log(myName.trim().length)





let myHeros = ['thor', 'spiderman']


let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.bikky = function(){
    console.log('Bikky is present in all objects')
}

Array.prototype.BikkySingh = function(){
    console.log("BikkySingh is present in this array")
}


heroPower.bikky()
// myHeros.BikkySingh()



//   inheritance


const user ={
    name : "chai",
    email : "chai@google.com"
}

const Teacher ={
    makeVidoe: true
}


const TeachingSupport ={
    isAvailable: false
}


const TASupport ={
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
 

const my = new TASupport

my.__proto__ = "Bikky"

// Teacher.__proto__ = user

Object.setPrototypeOf(TeachingSupport, Teacher) 

// console.log(Teacher.__proto__)



let anotherUsername = "ChaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(` True Length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Bikky".trueLength
"iceTea".trueLength








const myname = "Bikky     "
console.log(myname.truelength)


Object.prototype.truelength = function(){
    console.log(myname.trim().length)
}


myname.truelength()