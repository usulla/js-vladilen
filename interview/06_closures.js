/* Замыкание
Функция имеет доступ (замыкает в себе) к переменным из вышестоящего скоупа 
*/

function sayHelloTo(name) {
    const message = 'Hello ' + name
    // функция замкнула в себе переменную message со значением Maria
    return function () {
        console.log(message)
    }
}
const helloToMaria = sayHelloTo('Maria')
helloToMaria()

// Практическое применение замыкания:
function createFrameworkManager() {
    const fw = ['Vue', 'React']

    return {
        print: function () {
            console.log(fw)
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager) // => function(){print, add}
// console.log(fw) // => Error
manager.print()
manager.add('Angular')
manager.print()
// То есть мы сделали переменную message приватной. Она нигде не доступна напрямую, 
// но мы можем ее изменять методами

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length - 1; i++) {
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}
// 1 Чиним через let
for (let i = 0; i < fib.length - 1; i++) {
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}
// 2 Чиним через замыкания
for (var i = 0; i <fib.length - 1; i++) {
    (function (j) {
        // var j = i // или так без передачи аргумента
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    }(i))

}



