// null, undefined, boolean, number, string,object, symbol

console.log(typeof NaN) //not a number
console.log(undefined*1) //NaN
console.log(1/0) //infinity

console.log(typeof function(){}) //function


//Привидение типов:
let language = "JS"
if(language){
    console.log('The best:', language)
}

// /* Falsy values:
// '', 0, null, undefined, NaN, false  ==  FALSE */ 
console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('Hello'))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean([]), '[]') // true
console.log(Boolean({}), '{}') //true
console.log(Boolean(function(){})) //true

// Строки и числа
console.log(1 + '2') //'12'
console.log(''+ 1 + 0) //'10'
console.log('' - 1 + 0) // -1 тк минус для строк не определен 
console.log('3'*'8') // 24
console.log(4 + 10 + 'px') // '14px'
console.log('px' + 5 + 10) // 'px510'
console.log('42' - 40) // 2
console.log('42px' - 40) // NaN ('42px' => NaN - 40 = NaN)
console.log(null + 2) // 2
console.log(undefined + 42) // NaN (undefined не приводится к числу)

// == vs  === 
// Использовать рекомендуется ===

console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true
console.log('0' == 0) // true

// ---- Неоднозначно, запомнить
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false

console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false

console.log(0 == null) // !false 
console.log(0 == []) // true
console.log(0 == {}) // false
