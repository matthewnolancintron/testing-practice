/** 
An analyzeArray function that takes an array of numbers
and returns an object with the following properties:
average, min, max, and length.
 */
function arrayAnalyzer(array) {
//   console.log(array);
  let length = array.length;
  let max = array.sort((a, b) => (a < b ? -1 : 1))[array.length - 1];
  let min = array.sort((a, b) => (a < b ? -1 : 1))[0];
  let average =
    array.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) /
      array.length;
    
  let objectFromArray = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
//   console.log(objectFromArray);
  return objectFromArray
}

module.exports = arrayAnalyzer;
