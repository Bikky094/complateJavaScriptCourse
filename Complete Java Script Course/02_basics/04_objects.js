// const tinderUser = new Object()              This is a Singleton Object 
const tinderUser = {}                       //  This is a Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Bikky"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "Bikky@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Bikky",
            lastname: "Chauhan"
        }
    }
}

// console.log(regularUser.fullname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}                            // This is Spread Method 
// console.log(obj3)


const users = [
    {
        id:1,
        email:"Bikky@email.com"
    },
    {
        id:1,
        email:"Bikky@email.com"
    },
    {
        id:1,
        email:"Bikky@email.com"
    },
]

users[1].email
// console.log(users)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLogged"))










// const cars = {
//     carsname:"Supra",
//     Model: 1993,
//     information:{
//         model_Name:{
//             M_Name:"mk4",
//             engine:"2jZ-GTE",
//             HP:276
//         }
//     },
//     Top_Speed:250,
//     Acceleration:"4.6s"

// }

// console.log(cars.Acceleration)










// const carList_1 = {
//     car1:"BMW M4 ",
//     car2:"Supra mk4",
//     car3:"Mercedes-C-Class",
//     car4:"Nissan GTR",
//     car5:"Audi RS7"
// }
// const carList_2 = {
//     Speed1:"330",
//     Speed2:"250",
//     Speed3:"250",
//     Speed4:"300",
//     Speed5:"340"
// }
// // const All_cars = {carList_1,carList_2}
// // const All_cars = Object.assign({}, carList_2, carList_1)               ********  method Number first 
// const All_cars = {...carList_1, ...carList_2}             // ********  Second Number Method and very Simple
// console.log(All_cars)











// *****************************************   Object de-structure   ******************************************



const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor:"Bikky"
}

// course.courseInstructor
// console.log(course.courseInstructor)

const {courseInstructor: Instructor} = course
// console.log(courseInstructor)
console.log(Instructor)


// const navbar = ({company}) =>{                de-structure in react
 
// }
// navbar(company= "Bikky")




// {  
//     "name": "Bikky",                              ##  Example of JSON API 
//     "coursename":"Js in Hindi",
//     "price":"Free"
// }


// [                           ## Is tara bhi API mil sakti hai 
//     {}
//     {}
//     {}
//     {}
// ]


//  API Name: randomuser me api

// API Chacke Tool : JSON formatter