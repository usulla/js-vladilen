/* Let
- может изменяться
- не доступна за предлеами block scope, в котором определена 
- ? не имеет this */

let a = 'Variable a'
let b = 'Variable b'

// block scope
{
    a = 'New variable A'
    let b = 'Local variable b' // !! Доступна только в этом block scope
    console.log('Scope A', a)
    console.log('Scope B', b)
}
console.log('Scope A', a)
console.log('Scope B', b)

/* Const
- нельзя изменять
*/

// const PORT = 8080
// PORT = 2000 // Error

const array = ['JS', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array) // все хорошо
array = ''
console.log(array) // Error

const obj = {}
obj.name = 'Vladilen'
obj.age = 23
delete obj.name
console.log(obj) // все хорошо

obj = 23
console.log(obj) // Error



