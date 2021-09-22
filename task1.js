const arr1 = [3, 5, 22, 5, 7, 2, 45,  75, 89, 21, 2];

const arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// HASSANS LÖSNING
function sumOfArray(myArray) {
    let sum = 0
    myArray.forEach(function(item){
        sum += item
    })
    return sum
} 

sumArr1 = sumOfArray(arr1)
sumArr2 = sumOfArray(arr2)
console.log(sumArr1, sumArr2)
console.log(sumArr1+sumArr2)



// MIN EGEN LÖSNING

// let totalNumber1 = 0
// let totalNumber2 = 0

// for (let i = 0; i< arr1.length; i++){
//     totalNumber1 += arr1[i];
// }

// for (let i = 0; i< arr2.length; i++){
//     totalNumber2 += arr2[i];
// }


// console.log(totalNumber1, totalNumber2)
// console.log(sumOfArray)
