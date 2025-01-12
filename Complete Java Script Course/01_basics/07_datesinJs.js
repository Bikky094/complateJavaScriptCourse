// Dates
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// let myCreateDate = new Date(2024, 0, 23)
// let myCreateDate = new Date(2024, 0, 23, 5, 3)
// let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("1970-1-2")
// console.log(myCreateDate.toLocaleString())



// let timeStemp = Date.now()
// console.log(timeStemp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
// console.log(newDate.getMonth() +1)
// console.log(newDate.getDay() +1)
// console.log(`${newDate.getDay() +1}`)
// newDate.getDay() +1


newDate.toLocaleString(newDate, {
    weekday:"long",
    
})

