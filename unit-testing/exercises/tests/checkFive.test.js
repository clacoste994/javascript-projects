const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    test("Descriptive feedback...", function() {
        let outPut = checkFive(2);
        expect(outPut).toEqual("2 is less than 5.");
    });
});

