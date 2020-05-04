// const person = {
//     name:'Maria',
//     age:29,
//     greet:function(){
//         onmouseleave.log('Greet')
//     }
// }

const person = new Object({
    name: 'Maria',
    age: 29,
    greet: function () {
        console.log('Greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const irina = Object.create(person)
irina.name = 'Irina'

const str = new String('Maria')

const multBy = (arr, n) => {
    return arr.map(i => n * i)
}

