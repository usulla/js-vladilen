// Imediate Invoked Function Expression
let result = []
for (var i = 0; i < 5; i++) {
    result.push(function () {
        console.log(i)
    })
}
result[2]()
result[4]()

let result2 = []
// Поправим:
for (var i = 0; i < 5; i++) {
    (function (j) {
        // var j = i // или так
        result2.push(function () {
            console.log(j)
        })
    }(i))

}
result2[2]()
result2[4]()