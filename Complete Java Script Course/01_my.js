


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         // console.log(error)
//         if (!error) {
//             resolve({
//                 username: "BikkySingh", password: "124578963"
//             })
           
//         } else {
         
//             reject("ERROR: Something went wrong")
            
//         }
//     }, 1000)
// })


// promiseFour.then(function(user){
// console.log(user)
// return user.username
// })
// .then(function(username){
// console.log(username)
// })
// .catch(function(error){
// console.log(error)
// })
// .finally(function(){
//     console.log("This is Coding")
// })











// promiseFour.then(function (user) {
//     console.log(user)
//     return user.username
// }).then(function (username) {
//     console.log(username)
// }).catch(function (error) {
//     console.log(error)
// }).finally(function () {
//     console.log('The promise is either resolved or rejectes')
// })






/////////////////////////////////////////////////////


const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = false
        if(!error){

            resolve({username: "javaScript", password: "124578963"})
        }else{

            reject("ERROR:JS went wrong")
        }
    }, 1000)
})


// async function consumePromiseFive(){
//     const responce = await promiseFive
//     console.log(responce);
    
// }

async function consumePromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce);
            
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()

