const encode = code => {
  let newCode = '';
  for (const key in code) {
    if (code[key] === 'a') newCode += 1;
    if (code[key] === 'e') newCode += 2;
    if (code[key] === 'i') newCode += 3;
    if (code[key] === 'o') newCode += 4;
    if (code[key] === 'u') newCode += 5;
    if (code[key] !== 'a' && code[key] !== 'e' && code[key] !== 'i' && code[key] !== 'o' && code[key] !== 'u') newCode += code[key];
  }
  return newCode;
}

const decode = code => {
  let encode = '';
  for (const key in code) {
    if (code[key] === '1') encode += 'a';
    if (code[key] === '2') encode += 'e';
    if (code[key] === '3') encode += 'i';
    if (code[key] === '4') encode += 'o';
    if (code[key] === '5') encode += 'u';
    if (code[key] !== '1' && code[key] !== '2' && code[key] !== '3' && code[key] !== '4' && code[key] !== '5') encode += code[key];
  }
  return encode;
}

describe('exercise 4 tests the encode function', () => {
  it('Test if encode are functions', () => {
    expect(typeof encode).toBe('function');
  })

  it('test if the vowels a, e, i, o, u are converted to 1, 2, 3, 4 and 5', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  it('Test if other letters/numbers are not converted', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz0123456789')).toBe('bcdfghjklmnpqrstvwxyz0123456789');
  })

  it('Test if the string that is returned by the functions has the same number of characters as the string passed as a parameter', () => {
    expect(encode('luiz')).toHaveLength(4);
  })
})

describe('exercise 4 tests the decode function', () => {
  it('Test if decode are functions', () => {
    expect(typeof decode).toBe('function');
  })

  it('test if the vowels 1, 2, 3, 4, 5 are converted to a, e, i, o and u', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('Test if other letters/numbers are not converted', () => {
    expect(decode('abcdefghijklmnopqrstuvwxyz06789')).toBe('abcdefghijklmnopqrstuvwxyz06789');
  })

  it('Test if the string that is returned by the functions has the same number of characters as the string passed as a parameter', () => {
    expect(decode('l53z')).toHaveLength(4);
  })
})