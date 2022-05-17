const caesarCipher = require('./caesarCipher');
//
test('all lowercase one word, shift by 1',()=>{
    expect(caesarCipher(1,'simple')).toBe('tjnqmf');
});
 
//
test('test wrapping from z to a.',()=>{
    expect(caesarCipher(1,'z')).toBe('a');
});

//
test('test wrapping from z to a.',()=>{
    expect(caesarCipher(12,'o')).toBe('a');
});

// 
test('test keeping the same case.',()=>{
    expect(caesarCipher(23,'Berserk')).toBe('Ybopboh');
})

//
test('test punctuation!',()=>{
    expect(caesarCipher(21,'Baka!')).toBe('Wvfv!');
})