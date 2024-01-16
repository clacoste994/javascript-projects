let num = 1001;

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let numString = String(num);

console.log(numString.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num2 = 123.45;

let numString2 = String(num2)

let numNoDeci = numString2.slice(0,3);
let numNoDeci2 = numString2.slice(4,6);

let noDeci = numNoDeci.concat(numNoDeci2);


console.log(noDeci.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (num === 1001) {
    console.log(num);
} 