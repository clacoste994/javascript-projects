//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let bunHop = function(a) {
if (a <= 0 || a >= 0) {
    a = a * 3;
} else {
    a = "ARRR!";
}
return a;
}
//console.log(bunHop("f"));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let bunHopTwo = function(arr) {
for (let i = 0; i < arr.length; i++) 
    if (a === NaN) {
        arr[i] = String("ARRR!");
    } else if (a !== NaN) {
        arr[i] = arr[i] * 3;
    }
    return arr;
    }
    //console.log(bunHopTwo(arr));

//My work after checking for solution
let bunHopThree = function(arr) {
for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] === "number") {
        arr[i] = arr[i] * 3;
    } else if (typeof arr[i] === "string") {
        arr[i] = "ARRR!";
    }
    return arr
} 
console.log(bunHopThree(arr))