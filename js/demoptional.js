"use strict";
/*
Optional Parameters
?=nullable

The parameter that may or may not receive a value can be appended with a '?' to mark them as optional
*/
function greet(message, name) {
    return message = ' ' + name + ' |';
}
console.log(greet('Hello', 'Sha'));
console.log(greet('Hii'));
