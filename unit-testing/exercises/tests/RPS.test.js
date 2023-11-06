const whoWon = require('../RPS.js');

describe("whoWon", function() {
    test("Result of tie game", function() {
        let outPut = whoWon('rock', 'rock');
        expect(outPut).toBe("TIE!");
    });
    test("Result of", function() {
        let outPut2 = whoWon('rock', 'paper');
        expect(outPut2).toBe('Player 2 wins!');
    })
    test("Result of", function() {
        let outPut3 = whoWon('paper', 'scissors');
        expect(outPut3).toBe('Player 2 wins!');
    })
    test("Result of",function() {
        let outPut4 = whoWon('scissors', 'rock');
        expect(outPut4).toBe('Player 2 wins!');
    })
    
});