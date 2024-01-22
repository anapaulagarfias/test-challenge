const fizzBuzzEvaluation = require("../fizzBuzz");

test("Número debe ser igual fizzBuzz", () => {
  expect(fizzBuzzEvaluation(15)).toBe("fizzBuzz");
});

test("Número debe ser igual Buzz", () => {
  expect(fizzBuzzEvaluation(5)).toBe("Buzz");
});

test("Número debe ser igual Fizz", () => {
  expect(fizzBuzzEvaluation(3)).toBe("Fizz");
});
