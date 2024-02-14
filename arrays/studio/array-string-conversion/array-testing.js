let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//strings.split(',');

//console.log(protoArray1.includes(','));

//2) 
function reverseCommas(array) {
	//TODO: 1. create and instantiate your variables.
	let check = array.split(',');
	let array2 = [];
	for (let i = 0; i < check.length; i++) {
		array2.unshift(check[i]);
	}

	let output = array2.join();
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}
console.log(reverseCommas(protoArray1));


//3)
function semiDash(array) {
	let check = array.split(';');
	let array2 = [];
	for (let i = 0; i < check.length; i++) {
		array2.unshift(check[i]);
	};
	let output = array2.join(';');
	//TODO: write the code required for this step


	return output;
}
console.log(semiDash(protoArray2));

//4)
function reverseSpaces(array) {
	let check = array.split(' ');
	let array2 = [];
	for (let i = 0; i < check.length; i++) {
		array2.unshift(check[i]);
	}; 
	let output = array2.join(' ');
	//TODO: write the code required for this step

	return output;
}
console.log(reverseSpaces(protoArray3));
//5)
function commaSpace(array) {
	let check = array.split(', ');
	let array2 = [];
	for (let i = 0; i < check.length; i++) {
		array2.unshift(check[i]);
	};
	let output = array2.join(',');
	//TODO: write the code required for this step

	return output;
}
console.log(commaSpace(protoArray4));
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings: strings,
	reverseCommas: reverseCommas,
	semiDash: semiDash,
	reverseSpaces: reverseSpaces,
	commaSpace: commaSpace
};
