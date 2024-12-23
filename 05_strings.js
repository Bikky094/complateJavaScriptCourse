const name = "BikkySingh";
const age = 19;
const email = "Bikky@email.com";

// Old  Style 
// console.log("My name is " + name + " and my age is "+ age + " and my email "+ email+ " my information ok")

// New style
console.log(`My name is ${name} and my age is ${age} and my email ${email} my information ok`)


const newString = new String("Bikky-singh-chauhann")
// console.log(newString)
// console.log(newString[3])
// console.log(newString.__proto__)

// if(newString.length == 0){
//     console.log('please add some string')
// }else{
//     console.log(String(newString))
// }

// console.log(newString.length)
// console.log(newString.toUpperCase())
// console.log(newString.charAt(5))
// console.log(newString.indexOf("S"))

const newStringTwo = newString.substring(0, 6)
console.log(newStringTwo)

const anotherString = newString.slice(0, -1)
console.log(anotherString)

const newStringthree = "              Bikky         Singh             "
console.log(newStringthree)
console.log(newStringthree.trim())

const url = "https://Bikky.com/bikky%20chauhan"
console.log(url.replace('%20', '-'))

console.log(url.includes("Bikky"))

console.log(newString.split('-'))