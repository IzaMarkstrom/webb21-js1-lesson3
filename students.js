students = [
    {DOB: 1980, marks: 96},
    {DOB: 1999, marks: 60},
    {DOB: 1954, marks: 70},
    {DOB: 1992, marks: 85},
    {DOB: 1995, marks: 62},
    {DOB: 1991, marks: 100},
    {DOB: 1985, marks: 30},
    {DOB: 1989, marks: 83},
    {DOB: 2000, marks: 20}
]

function getAge(student){
    return 2021-student.DOB
}

// students.forEach(function(student){
//     console.log(getAge(student))
// })



function getGrade(student){
    const marks = student.marks
    if(marks === 100){
        return "A"
    } else if (marks < 100 && marks >= 90){
        return "B"
    } else if (marks < 90 && marks >= 80){
        return "C"
    } else if (marks < 80 && marks >= 70){
        return "D"
    } else if (marks < 70 && marks >= 60){
        return "E"
    } else if (marks < 60){
        return "F"
    }
}




students.forEach(function(student){
    console.log(getAge(student), getGrade(student))
})


const failedStudent = students.filter(function(student){
    return getGrade(student) === "F"
})

function getStudentsWithGrade1(grade){
    const filteredStudents1 = students.filter(function(student){
        return getGrade(student) === grade
    })
}

console.log(failedStudent)


// // students.forEach(function(student){  // DEN HÄR FUNKTIONEN ROPAR PÅ FUNKTIONEN OVAN
// //     // console.log(getAge(student), getGrade(student))
// // })

// function getStudentsWithGrade(grade) {
//     const filteredStudents = students.filter(function(student){
//         return getGrade(student) === grade
//     })
//     return filteredStudents
// }

// const grades = ["A", "B", "C","D", "E", "F"]

// const gradedStudents = grades.map(function(grade){
//     return getStudentsWithGrade(grade)
// })

// console.log(gradedStudents)