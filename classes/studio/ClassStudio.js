//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(difScore) {
        this.scores.push(difScore)
        return this.scores
    }
    averageScore() {
        let sum = 0
        for(let score of this.scores) {
            sum += score;
        }
        let average = sum/this.scores.length;
        return Math.round(average*10)/10;
    }
    status() {
        let averageScore = this.averageScore()
        if (averageScore >= 90) {
            return 'Accepted'
        } else if (averageScore <= 89 || averageScore >= 80) {
            return 'Reserved'
        } else if(averageScore <= 79 || averageScore >= 70) {
            return 'Probationary'
        } else {
            return 'Rejected'
        } 
    }
}

let bubbaBear = new CrewCandidate('bubbaBear', 135 +"kg", [88,85,90]);
let merryMaltese = new CrewCandidate('merryMaltese', 1.5 + "kg", [93,88,97]);
let gladGator = new CrewCandidate('gladGator', 225 + "kg", [75,78,62]);

//console.log(bubbaBear, merryMaltese, gladGator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//console.log(bubbaBear.addScore(83));
//console.log(bubbaBear.scores);
console.log(bubbaBear.averageScore());
console.log(bubbaBear.status());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

/*console.log(`${this.name} earned an average test score of ${this.averageScore} and has a status of Accepted.`)
console.log(`${this.name} earned an average test score of ${this.averageScore} and has a status of Reserved.`)
console.log(`${this.name} earned an average test score of ${this.averageScore} and has a status of Probationary.`)
console.log(`${this.name} earned an average test score of ${this.averageScore} and has a status of Rejected.`)*/

