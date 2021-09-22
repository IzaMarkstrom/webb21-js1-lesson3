// let i = 0
// while (i < 10){
//     console.log(`Hej ${i}`)
//     i++
// }

// for (let i = 0; i < 10; i++){
//     console.log(`Hej ${i}`)
// }

const isEven = number => number % 2 == 0
var myArray = [16, 17, 18, 19, 20, 5, 2]

// let totalAge = 0

// for (let i = 0; i< myArray.length; i++){
//     totalAge += myArray[i];
// }

// console.log(totalAge)

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`${element} is an even number? ${isEven(element)}`)
// }

// for (let i = 0; i < 10; i++){
//     if (i == 5){
//         break;
//     }
//     console.log(`Hej ${i}`)
// }

for (let i = 0; i < myArray.length; i++){
    if(myArray[i] < 19){
        continue
    }
    console.log(myArray[i])
}