let boxs = document.querySelectorAll('.box')
let body = document.querySelector("body")

// console.log(boxs)

boxs.forEach(function(box){
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }

    })
    
})

























// const convertArray = Array.from(boxs)

// convertArray.forEach(function(box){
//     console.log(box)
//     convertArray.addEventListener('click', function(e){
//          console.log(e)
//          console.log(e.targer)
// })

// })
