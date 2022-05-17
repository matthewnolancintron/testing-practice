const reverseString = require('./reverseString');

test('takes string and returns it reversed', () => {
  expect(reverseString('reverse')).toBe('esrever');
});