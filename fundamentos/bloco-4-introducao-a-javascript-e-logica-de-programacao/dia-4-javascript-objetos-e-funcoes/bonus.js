// 1

let romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function whatRomanNumber(number) {
  number = number.toUpperCase();
  let sum = romanNumbers[number[number.length - 1]];
  let current = romanNumbers[number[number.length - 1]];

  for (let index = 2; index <= number.length; index++) {
    const next = romanNumbers[number[number.length - index]]

    if (current <= next) {
      sum += next;
    } else {
      sum -= next;
    }
    current = next;
  }
  return sum;
}

console.log(whatRomanNumber('vi'));

// 2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array) {
  let evenNumbers = [];
  for (let index = 0; index < array.length; index++) {
    for (let counter = 0; counter < array[index].length; counter += 1) {
      if (array[index][counter] % 2 === 0) {
        evenNumbers.push(array[index][counter]);
      }
    }
  }

  return evenNumbers;
}

console.log(arrayOfNumbers(vector));
