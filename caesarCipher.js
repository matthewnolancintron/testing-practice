// takes a string and returns it with each character “shifted”.
function caesarCipher(shiftByNumber, string) {
  //  shift has to be a number between 1 and 25
  let key = shiftByNumber;

  let alphabetValues = {
    a: 0,
    A: 0,
    b: 1,
    B: 1,
    c: 2,
    C: 2,
    d: 3,
    D: 3,
    e: 4,
    E: 4,
    f: 5,
    F: 5,
    g: 6,
    G: 6,
    h: 7,
    H: 7,
    i: 8,
    I: 8,
    j: 9,
    J: 9,
    k: 10,
    K: 10,
    l: 11,
    L: 11,
    m: 12,
    M: 12,
    n: 13,
    N: 13,
    o: 14,
    O: 14,
    p: 15,
    P: 15,
    q: 16,
    Q: 16,
    r: 17,
    R: 17,
    s: 18,
    S: 18,
    t: 19,
    T: 19,
    u: 20,
    U: 20,
    v: 21,
    V: 21,
    w: 22,
    W: 22,
    x: 23,
    X: 23,
    y: 24,
    Y: 24,
    z: 25,
    Z: 25,
  };

  let numbersToAlphabetLowerCase = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };

  let numbersToAlphabetUpperCase = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "O",
    15: "P",
    16: "Q",
    17: "R",
    18: "S",
    19: "T",
    20: "U",
    21: "V",
    22: "W",
    23: "X",
    24: "Y",
    25: "Z",
  };

  let cipherTextArray = [];

  string.split("").forEach((letter) => {
    let alphabetRegex = /[a-zA-Z]/;
    //check if letter is a letter
    if (alphabetRegex.test(letter)) {
      /**
       * check if letter is upper case or lowercase,
       * use alphabet values to get a letter's value
       * shift that by the shift by number and modulo
       * the result by 26 to make sure the value will always
       * be between 0 and 25 the result is used in another
       * object either the lowercase or uppercase version
       * depeniding on the case of the original letter
       * to retrive the encrypted letter and then add it to
       * the array cipherTextArray.
       */
      let newLetter;
      if (letter == letter.toUpperCase()) {
        newLetter =
          numbersToAlphabetUpperCase[
            (alphabetValues[letter] + shiftByNumber) % 26
          ];
      } else {
        newLetter =
          numbersToAlphabetLowerCase[
            (alphabetValues[letter] + shiftByNumber) % 26
          ];
      }

      cipherTextArray.push(newLetter);
    } else {
      //just add on the original character to the cipher text
      cipherTextArray.push(letter);
    }
  });

  //return array to string
  return cipherTextArray.join("");
}

module.exports = caesarCipher;
