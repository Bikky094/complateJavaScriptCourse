const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumber.map((num)=> { return num + 10} )
// const newNums = myNumber.map((num)=> num + 10 )


const newNums = myNumber
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 50)

console.log(newNums)



// const myNewNums = myNumber.forEach((num)=>{
//     num = num +10
//     console.log(num)
// })

// for (let num of myNumber) {
//     num = num + 10
//     console.log(num)
// }