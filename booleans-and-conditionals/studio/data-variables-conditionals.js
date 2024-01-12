// Initialize Variables below

const date = 'Monday 2019-03-18';
const time = '10:05:34 AM';
const astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg =	74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit =	850000;
const fuelTempCelsius =	-225;
const minimumFuelTemp =	-300;
const maximumFuelTemp =	-150;
const fuelLevel =	'100%';
const weatherStatus =	'clear';
const preparedForLiftOff =	true;
let n = 0;
let checkGo = n;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if(astronautCount <= 7) {
    checkGo = n++;
} else {
    checkGo = n + 0;
}
// add logic below to verify all astronauts are ready

if(astronautStatus === 'ready') {
    checkGo = n++;
} else {
    checkGo = n + 0;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if(totalMassKg < maximumMassLimit) {
    checkGo = n++;
} else {
    checkGo = n + 0;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if(fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
    checkGo = n++;
} else {
    checkGo = n + 0;
}

// add logic below to verify the fuel level is at 100%

if(fuelLevel === '100%') {
    checkGo = n++;
} else {
    checkGo = n + 0;
}

// add logic below to verify the weather status is clear

if(weatherStatus === 'clear') {
    checkGo = n++;
} else {
    checkGo = n + 0;
}



// Verify shuttle launch can proceed based on above conditions

if(checkGo === 5 && preparedForLiftOff === true) {
    console.log('\nAll systems are a go! Initiating space shuttle launch sequence.');
    console.log('date :' + date);
    console.log('time :' + time);
    console.log('astronautCount :' + astronautCount);
    console.log('crewMassKg :' + crewMassKg);
    console.log('fuelMassKg :' + fuelMassKg);
    console.log('shuttleMassKg :' + shuttleMassKg);
    console.log('totalMassKg :' + totalMassKg);
    console.log('fuelTempCelsius :' + fuelTempCelsius);
    console.log('weatherStatus :' + weatherStatus);
    console.log('Have a safe trip astronauts!');
} else {
    console.log("Not cleared for liftoff!");
}
