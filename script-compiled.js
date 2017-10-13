'use strict';

//----1---

var one = 'Hello';
var two = 'world!';
console.log(one + ' ' + two);

//console.log(...greeting, ...name);

//-------------2------------------

//const a = prompt('podaj dyfrę "a":' + '');
//const b = prompt('podaj cyfrę "b":' + '');

var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    return a * b;
};
console.log(multiply(8, 9));

//--------3-----------

//setTimeout(() => console.log('heja, heja'), 3000);

function averages() {
    //console.log(toAdd);
    var result = 0;

    for (var _len = arguments.length, toAdd = Array(_len), _key = 0; _key < _len; _key++) {
        toAdd[_key] = arguments[_key];
    }

    for (var i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result / toAdd.length;
};

console.log(averages(2, 6, 8, 4));

//------------------4---------------


var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var result = 0;
grades.forEach(function (grade) {
    result += grade;
});

console.log(result / grades.length);

//----------5------------

var array = [1, 4, 'Iwona', false, 'Nowak'];
var first = array[0],
    last = array[2];

console.log(first, last);
