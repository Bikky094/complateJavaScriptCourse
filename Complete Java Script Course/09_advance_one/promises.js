fetch('https://somthing.com').then().catch().finally()
//                           . then() = responce aaye ga to .then mai aaye ga
//                           . catch() = error aaye ga to .catch mai aaye ga
//                           . finally() = mai sab kuch aa jaye ga 


//////////////////////////////////////////////////////////////


// const promiseOne = new Promise()         //       this is promises syntax


const promiseOne = new Promise(function (resolve, reject) {
    //  Do an async task
    //  DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise consumed')
})



/////////////////////////////////////////////////////


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 ')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async task 2 resolved')
})


//////////////////////////////////////////////////////


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: 'BikkySingh',
            email: 'Bikky@example.com',
            password: '125463987'

        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})



///////////////////////////////////////////////////////////////////////////////////// 



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        // console.log(error)
        if (!error) {
            resolve({
                username: "BikkySingh", password: "124578963"
            })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.username
}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log('The promise is either resolved or rejectes')
})


///////////////////////////////////////////////////////


const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true
        // console.log(error)
        if (!error) {
            resolve({
                username: "javaScript", password: "124578963"
            })
        } else {
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



/////////////////////////////////////////////


// async function getAllUsers(){
//    try {
//     const responce = await fetch('https://api.github.com/users/Bikky094')
//     const data = await responce.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E: " , error)
//    }
// }

// getAllUsers()


fetch('https://api.github.com/users/Bikky094').then((responce) => {
    return responce.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))