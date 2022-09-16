function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('exercise 3 tests the myFizzBuzz function', () => {
  it('make a call with a number divisible by 3 and 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('make a call with a number divisible by 3 and check if the return is as expected', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('make a call with a number divisible by 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('make a call with a number that is not divisible by 3 and 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(2)).toBe(2);
  })

  it('make a call with a parameter that is not a number and check if the return is what you expect', () => {
    expect(myFizzBuzz('2')).toBeFalsy();
  })  
})