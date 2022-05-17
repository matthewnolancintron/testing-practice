function reverseString(string){
    // A reverseString function
    //  that takes a string and returns it reversed.
    let reversed = [];
    for (let index = string.length-1; index > -1; index--) {
        let letter = string[index];
        reversed.push(letter);
    }
    return reversed.join('');
}

module.exports = reverseString;