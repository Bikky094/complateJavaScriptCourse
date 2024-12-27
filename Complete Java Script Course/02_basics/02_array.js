const marvel_heros = ["Thor", "Ironman","spiderman"]
const cd_heros = ["superman", "flash","batman"]

// marvel_heros.push(cd_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(cd_heros)
// console.log(allHeros)

// const all_new_hores = [...marvel_heros, ...cd_heros]            // This is a Spread operator
// console.log(all_new_hores)


const another_array = [1, 2, 3,[ 4, 5, 6], 7, [6, 7, [4, 5]]] 


const real_another_array = another_array.flat(2)    
console.log(real_another_array)

console.log(Array.isArray("BikkySingh"))
console.log(Array.from("BikkySingh"))
console.log(Array.from({name:"BikkySingh"}))     // interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))