// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

// try on array ******************

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}




const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}






// Maps  ****************



const map = new Map()
map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
// map.set("In", "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key,"=", value)
    
}







// tyr on Objects

const myObject = {
    'car1' : "BMW",
    'car2' : "Supra",
    'car3' : "Nissan",
    'car4' : "Audi",
}

for (const key of myObject) {
    console.log(key)
}





