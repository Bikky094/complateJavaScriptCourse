
// console.log(text)
// console.log(email)
// console.log(password)
// console.log(button)


let text = document.querySelector('#text')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let a_link = document.querySelector('#a_link')
let Goimg = document.querySelector('.img')

let button = document.querySelector('#btn')



button.addEventListener('click', function (e) {
    console.log(e.target)
    e.preventDefault()

    let textvalue = text.value
    let emailvalue = email.value
    let passwordvalue = password.value

  
    if (textvalue === "") {
        alert('Please Enter Name')
    }else if (emailvalue === "") {
        alert('Please Enter email')
    }else if (passwordvalue === "") {
        alert('Please Set password')
    }else if (e.target.id === 'btn') {
        a_link.style.display = 'block';
        button.style.display = 'none'
        text.style.display = 'none'
        email.style.display = 'none'
        password.style.display = 'none'
        Goimg.style.display = 'block'
    }

})
