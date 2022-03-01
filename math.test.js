// The operation should return the sum of two numbers
// change the result
const { division } = require("./division");

test("6 / 3 = 2", () => {
  expect(division(6, 3)).toBe(2);
});

test.skip("0 / 9 = 0", () => {
  expect(division(0, 9)).toBe(0);
});
