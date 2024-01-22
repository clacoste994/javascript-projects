const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel = input.question("Starting fuel? ");
startingFuel = Number(startingFuel);

let nOA = input.question("Number aboard? ");
nOA = Number(nOA);

let altitudeReached;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

/*while (startingFuel <= 5000 || startingFuel >= 30000) {
  startingFuel = input.question("Invalid fuel level. Enter valid fuel level... ");
  startingFuel = Number(startingFuel);
}

console.log("Valid fuel level.");*/

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

/*while (nOA >= 7 || nOA <= 0) {
  nOA = input.question("Invalid number of astronauts... ");
  nOA = Number(nOA);
}

console.log('Valid number of astronauts');*/


//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
