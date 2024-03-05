// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Value of organizations", function() {
    expect(launchcode.organization).toBe("nonprofit");
  })

  test("Value of executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })

  test("Value of percentageCoolEmployee", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test("Value of programsOffered", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  })
 
  // Write your unit tests here!
});

describe('launchOutput function', function() {
  test("numbers divisible by 2", function() {
    expect(launchcode.launchOutput(8)).toBe('Launch!');
  }) 

  test("numbers divisible by 3", function() {
    expect(launchcode.launchOutput(9)).toBe('Code!');
  }) 

  test("numbers divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(12)).toBe('Rocks!');
  }) 

  test("numbers divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toBe('LaunchCode!');
  }) 

  test("numbers divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  }) 

  test("numbers divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  })

  test("numbers not divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(29)).toBe("Rutabagas! That doesn't Work.");
  })
  
})