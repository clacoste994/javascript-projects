/*/Exercise #1: Construct for loops that accomplish the following tasks:
  //  a. Print the numbers 0 - 20, one number per line.

    for (let i = 0; i <= 20; i++) {
      console.log(i);
    }
   // b. Print only the ODD values from 3 - 29, one number per line.

   for (let i = 3; i <= 29; i = i + 2) {
    console.log(i);
  }

   // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

   for (let i = 12; i >= -14; i = i - 2) {
    console.log(i);
  }
    //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */



//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
/*
let string = 'LaunchCode';
let array = [1, 5, 'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.

  for (i = 0; i < array.length; i++ ) {
    console.log(array[i])
  }

  //b. Print each character of the string - in reverse order - to a new line.

  for (i = 0; i < string.length; i++ ) {
    console.log(string[i])
  }

*/

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.*/

  let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let even = [];
  let odd = [];
  for (i = 0; i < numbers.length; i++) {
    if(numbers % 2 === 0) {
      numbers.push(even);
    } else {
      numbers.push(odd);
    }

  }

  console.log(even);

  console.log(odd);
  
 // b. Print the arrays to confirm the results. 