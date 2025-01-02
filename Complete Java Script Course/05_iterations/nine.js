const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, carrval){
//     console.log(`acc: ${acc} and carrval: ${carrval}`)
//     return acc + carrval
// }, 0)


// const myTotal = myNums.reduce( (acc, carr)=> acc+carr , 0 )

// const myTotal = myNums.reduce( (acc, carr)=> acc+carr , 0 )

// console.log(myTotal)




const shoppingCard = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 999
    },
    {
        itemName: "mobile dev course",
        price : 5999
    },
    {
        itemName: "data science course",
        price : 12999
    },
]

 const total = shoppingCard.reduce( (acc, carr) => acc + carr.price, 0)
 console.log(total)