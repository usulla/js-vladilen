const person = {
    surname: 'Сухарев',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}
const john = { surname: 'Сноу' }
person.knows('все', 'Толя')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.call(john, ...['ничего не', 'Джон']) // ES6 spred
person.knows.bind(john, 'ничего не', 'Джон')()  // возвращает функцию

// ========
function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const petya = new Person('Petya', 20)
console.log(petya)

function logThis(){
    console.log(this)
}
// ==== Явная передача контекста
const obj = { num: 42 }
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// ==== Неявная передача контекста
const animal = {
    legs: 4,
    logThis: function () {
        console.log(this)
    }
}

animal.logThis()

//  => не создает свой собственный контекст this
function Cat(color){
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this) )()
}

new Cat('red')