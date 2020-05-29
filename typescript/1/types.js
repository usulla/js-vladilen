"use strict";
var str = 'Hello';
console.log(str);
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var world = ['Hello', 'TS'];
//Tuple
var contact = ['Hello', 12345];
//Any
var variable = 42;
variable = 'new String';
function sayMyName(name) {
    console.log(name);
}
sayMyName('Maria');
// Never
function trowError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 12234;
var id2 = '12234';
