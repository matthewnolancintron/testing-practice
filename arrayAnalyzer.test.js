const arrayAnalyzer = require("./arrayAnalyzer");
/** */

//
let basicArray = [1,2,3]

test("basic array?", () => {
  expect(arrayAnalyzer(basicArray)).toStrictEqual({
      average:2,
      min:1,
      max:3,
      length:3
  });
});