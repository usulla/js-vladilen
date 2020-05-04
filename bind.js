const maria = {
    name: "Maria",
    age: 29,
    logInfo(job, phone) {
        return `Name:${this.name} age:${this.age} job:${job} phone:${phone}`
    }
}

const mila = {
    name: 'Mila',
    age: 45
}

const resultMila = maria.logInfo.bind(mila, 'massage', 8925)()
const resultMila2 = maria.logInfo.bind(mila)
// Not need "()"
const resultMila3 = maria.logInfo.call(mila, 'massage', 8925)
const resultMila4 = maria.logInfo.apply(mila, ['massage', 8925])
console.log(resultMila)
console.log(resultMila2('massage', 8925))
console.log(resultMila3)
console.log(resultMila4)


// !!!
Array.prototype.multBy2 = function(n) {
    return this.map(i => n * i)
}

console.log([1, 2, 3, 4, 5].multBy2(3))