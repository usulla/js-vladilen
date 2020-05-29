// JS перемещает function в начало файла и 
//мы можем образаться до того как определили
console.log(sum(1, 41))
function sum(a, b){
    return a + b
}

// Всплывает
console.log(i) // undefind
var i = 42

var i
console.log(i) // undefind
i = 42
console.log(i) //42

// ! const и let не всплывают
// console.log(num) // ReferenceError
// const num = 42

// Function Expression & Function Declaration
// Function Declaration всплывают
console.log(square(25))

function square(num){
    return num**2
}
// Function Expression не всплывают
console.log(square2(25))
const square2 = num => {
    return num**2
}
