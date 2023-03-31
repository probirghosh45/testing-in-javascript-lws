const {generateResult,validateInput} = require("../js/lib")

// unit test for generateResult()
test("testing generate result function", () => {
  expect(generateResult("1","our first test")).toBe("User ID: 1 created an article titled our first test") 
});

// unit test for validateInput() 
test("testing validateInput function", () => {
    expect(validateInput(1,true,true)).toBeTruthy()
 }) 
