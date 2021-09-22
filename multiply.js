function multiplyNumbers(number1, number2){
    return number1*number2
}

// console.log(multiplyNumbers(2,2))

function evenOrOdd(number){
    return number = number % 2 == 0 ? true : false
}

console.log(evenOrOdd(12))

const isEven = (number) => { // OCKSÅ EN FUNCTION
    return number % 2 == 0
}

const isEven = (number) => number % 2 == 0 // OCKSÅ EN FUNCTION

// MED ETT RETURN VÄRDE
function voteOrNot(age){
    return age >= 18 ? "Du får rösta" : "Du får inte rösta"
}

console.log(voteOrNot(10))

// MED TVÅ RETURN VÄRDEN 
function voteOrNot(age){
    if (age >= 18){
        return "Du får rösta"
    } else {
        return "Du får inte rösta"
    }
}

console.log(voteOrNot(10))

const isDivideableByThree = number => number % 3 == 0 // FUNCTION PÅ EN RAD