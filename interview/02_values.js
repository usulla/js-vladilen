// Простое копирование для примитива по значению
let a = 42
let b = a
b++
console.log('a', a)
console.log('b', b)

// Копирование по ссылке (передаем как reference)
let a2 = [1, 2, 3]
let b2 = a2

let c2 = a2.concat() // клон массива
// или так
let c2 = [].concat(a2) // клон массива
// или так
let c2 = a2.slice(0);
// или так
let c2 = Object.assign([], a2) 
// или так
var с2 = Array.from(a2);
// или так
var с2 = [...a2];
// или так
a2.forEach(item => {
    c2.push(item)
})

let d2 = [1, 2, 3, 4]
b2.push(4)

console.log('a2', a2)
console.log('b2', b2)
console.log('c2', c2)
console.log('f2', f2)
console.log(a2 === b2)
console.log(a2 === d2)