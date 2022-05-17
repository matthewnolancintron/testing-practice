const calculator = require('./calculator');

//add
test('add two number and returns the sum', () => {
  expect(calculator("add",1,2)).toBe(3);
});

// subtract
test('find the difference between two numbers', () => {
    expect(calculator("subtract",10,3)).toBe(7);
  });

// divide
test('returns number of times number goes into another', () => {
    expect(calculator("divide",9,3)).toBe(3);
  });

// multiply
test('multiply two numbers together returns product', () => {
    expect(calculator('multiply',13,2)).toBe(26);
  });