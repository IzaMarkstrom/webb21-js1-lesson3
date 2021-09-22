/*

Syfte med Arrays:
Strukturera värden i en variabel.
Mindre kod. 
Lättare att jobba med.

*/

const names = [
    "Iza",
    "Denise",
    "Zamir",
    "Felix",
    "Sofia",
    "Madelaine",
    "Hanna"
]

// names.forEach(function(name) { // DET HÄR ÄR SAMMA SOM....
//     console.log(name)
// })

// for (let i = 0; i < names.length; i++){ // ... SOM DEN HÄR KODEN
//     const name = names[i];
//     console.log(name)
// }

// const ages = [16, 12, 24, 27, 17, 28]
// const voters = [] 
// const nonVoters = []

// ages.forEach(function(age){
//     if (age > 18){
//         voters.push(age)
//     } else {
//         nonVoters.push(age)
//     }
// })

// console.log(voters, nonVoters)


// function multiplyBy2(x, index){ // Här inuti läggs parametern för att få fram vilket index man är på
//     // console.log(x*2, index)
// }

// const ages = [12, 34, 45, 13, 46]

// ages.forEach(multiplyBy2)


// const greeting = names.map(function(name){ // Funktionen itereras 8ggr och för varje värde returneras "Hej"
//     return `Hej ${name}`
// })

// console.log(greeting)

// let doesExist = false

// names.forEach(function(name) {
//     if(name === "Zamir"){
//         doesExist = true
//     }
// })

// doesExist = names.indexOf("Iza") < 0 ? false : true

// console.log(doesExist)

// console.log(names.reverse()) // BÖRJAR BAKIFRÅN ARRAYN


const result = names.filter(function(name){ // Filtrerar ut alla namn är längre än 4 tecken
    return name.length > 4
})
console.log(result)

const filterOn = "sVeN"
const filteredArray = names.filter(function(name){  // DENNA FUNKTION SÖKER EFTER MED ENBART GEMENER TILL BOKSTÄVER
    return name.toLowerCase() === filterOn.toLowerCase()
})
console.log(filteredArray)