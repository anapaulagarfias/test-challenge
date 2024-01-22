const calculator = require("../calculator");

test("adds a + b", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("substracts a - b", () => {
  expect(calculator.substract(2, 1)).toBe(1);
});

test("multiplies a * b", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("divides a / b", () => {
  expect(calculator.divide(3, 1)).toBe(3);
});

test("Raises to power a ^ b", () => {
  expect(calculator.power(2, 2)).toBe(4);
});
