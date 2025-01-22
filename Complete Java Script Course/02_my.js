// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body style="background-color: #212121; color: rgb(195, 195, 195);">

//     <h1>This is a heading</h1>





// </body> -->


    // fetch('https://api.github.com/users/Bikky094').then((responce) => {
    //     return responce.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch((error)=> console.log(error))

    const promiseOne = new Promise(function (resolve, reject) {
        setTimeout(function () {
            const myFetch = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e453972959c5a13ec6df91c10a352bd6').then(function(responce){
                return responce.json()
            }).then(function(data){
                console.log(data)
            }).catch(function(error){
                console.log(error)
            })
        }, 1000)
    })












// <!-- </html> -->