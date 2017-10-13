//----1---

const one = 'Hello';
const two = 'world!';
console.log(`${one} ${two}`);

//console.log(...greeting, ...name);

//-------------2------------------

//const a = prompt('podaj dyfrę "a":' + '');
//const b = prompt('podaj cyfrę "b":' + '');

let multiply = (a=4,b=3) => a * b;
console.log(multiply(8,9));


//--------3-----------

//setTimeout(() => console.log('heja, heja'), 3000);

function averages(...toAdd) {
    //console.log(toAdd);
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    } 
    return result/toAdd.length;
};

console.log(averages(2,6,8,4));

//------------------4---------------


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var result = 0;
grades.forEach(function(grade) {
  result += grade;
});

console.log(result/grades.length);


//----------5------------

const array = [1, 4,'Iwona', false, 'Nowak'];
const [first, ,last] = array;
console.log(first, last);



