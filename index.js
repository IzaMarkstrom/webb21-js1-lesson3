// function greeting(name="Unknown") { // Sätter in ett default value för name som "Unknown"
//     return `Hello ${name}`
// }

// const welcomeMessage = greeting("Iza")

// console.log(welcomeMessage)


function isUnderAge(age) { // Börjar en function med is / has så ska en boolean returneras
    return age <= 18 ? true : false
    // if(age <= 18) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isUnderAge(19))


