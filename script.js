//----1---

const one = 'Hello';
const two = 'world!';
console.log(`${one} ${two}`);

//console.log(...greeting, ...name);

//-------------2------------------


let multiply = (a=4,b=3) => a * b;
console.log(multiply(8,9));


//--------3-----------


let result = 0;
function averages(...toAdd) {
    //console.log(toAdd);
    //let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    } 
    return result/toAdd.length;
};

console.log(averages(2,6,8,4));

//------------------4---------------


let grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(averages(...grades));


//----------5------------

const array = [1, 4,'Iwona', false, 'Nowak'];
const [, ,third, ,last] = array;
console.log(third, last);



