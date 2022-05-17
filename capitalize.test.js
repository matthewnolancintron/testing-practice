const capitalize = require('./capitalize');

test('capitalize first letter', () => {
  expect(capitalize('word')).toBe('Word');
});