const form = document.querySelector("form")
console.log(form)
// This usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value)



form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results")
    
    if (height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
        results.style.border = "2px solid black"
        results.style.height = "50px"
        results.style.width = "500px"
        results.style.margin = "auto"
        results.style.fontSize = "23px"
    }
    // results.innerHTML = `${height}`
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // Show the result
        results.innerHTML = `<span>${bmi}{/span>`
    }



})