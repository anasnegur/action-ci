const { division } = require("./division");

test.each([
  [9, 3, 3],
  [30, 10, 3],
  [10, 2, 5],
])("a / b = c", (a, b, expected) => {
  expect(division(a, b)).toBe(expected);
});
