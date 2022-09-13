const sum = require('./sum');

describe('exercise 1 tests the sum function', () => {
  it('test if sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Test if sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('test if sum function throws an error when parameters are 4 and "5"', () => {
    expect(() => {sum(4, '4')}).toThrow();
  })

  it('Test if the error message is "parameters must be numbers" when calling sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
})