
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput(n) {
        let stringOutput = '';
        if (n % 2 === 0 && n % 3 !== 0 && n % 5 !== 0) {
            stringOutput = 'Launch!';
        } else if (n % 3 === 0 && n % 2 !== 0 && n % 5 !== 0) {
            stringOutput = 'Code!';
        } else if (n % 3 === 0 && n % 2 === 0 && n % 5 !== 0) {
            stringOutput = 'Rocks!';
        } else if (n % 3 === 0 && n % 2 !== 0 && n % 5 === 0) {
            stringOutput = 'LaunchCode!';
        } else if (n % 3 !== 0 && n % 2 === 0 && n % 5 === 0) {
            stringOutput = 'Launch Rocks! (CRASH!!!!)';
        } else if (n % 3 === 0 && n % 2 === 0 && n % 5 === 0) {
            stringOutput = 'LaunchCode Rocks!';
        } else if (n % 3 !== 0 && n % 2 !== 0 && n % 5 !== 0) {
            stringOutput = "Rutabagas! That doesn't Work.";
        }


            return stringOutput;
        }
    }

module.exports = launchcode;
