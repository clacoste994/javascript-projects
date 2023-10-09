let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)} 
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)} 
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)} 
};

let goodDog = {
   name: "Leroy",
   speceies: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 10,
   move: function () {return Math.floor(Math.random()*11)} 
}

let wonderBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)} 
}

let crew = [superChimpOne, salamander, superChimpTwo, goodDog, wonderBear];


function crewReport(a) {
   let report = '';
   if (0 === a) {
   report = `${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. Their ID is ${superChimpOne.astronautID}.`;
   report = `${name} is a ${species}. They are ${age} years old and ${mass}. Their ID is ${astronautID}`;
} else if (1 === a) {
   report = `${salamander.name} is a ${salamander.species}. They are ${salamander.age} years old and ${salamander.mass} kilograms. Their ID is ${salamander.astronautID}.`;
} else if (2 === a) {
   report = `${superChimpTwo.name} is a ${superChimpTwo.species}. They are ${superChimpTwo.age} years old and ${superChimpTwo.mass} kilograms. Their ID is ${superChimpTwo.astronautID}.`;
} else if (3 === a) {
   report = `${goodDog.name} is a ${goodDog.species}. They are ${goodDog.age} years old and ${goodDog.mass} kilograms. Their ID is ${goodDog.astronautID}.`;
} else if (4 === a) {
   report = `${wonderBear.name} is a ${wonderBear.species}. They are ${wonderBear.age} years old and ${wonderBear.mass} kilograms. Their ID is ${wonderBear.astronautID}.`;
}
return report;
}
console.log(crewReport(1));


// I required solution help to fix this function. Specifically using a while loop within a for loop, instead of a for loop inside a for loop.
function fitnessTest(crew){
   let results = []; 
   let steps; 
   let turns;
   for (let i = 0; i < crew.length; i++){
       steps = 0;
       turns = 0;
       while(steps < 20){
       steps += crew[i].move();
       turns++;
       }
       results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(crew))

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.


// Start an animal race!