const factorial = require("../factorial");

test("El factorial del número 5 es 120", () => {
  expect(factorial(5)).toBe(120);
});
