const {generateResult,validateInput} = require("../js/lib")

test("testing generate result", () => {
  expect(generateResult("1","our first test")).toBe("User ID: 1 created an article titled our first test") 
});

test("testing Input Value", () => {
    expect(validateInput(1,true,true)).toBeTruthy()
 }) 
