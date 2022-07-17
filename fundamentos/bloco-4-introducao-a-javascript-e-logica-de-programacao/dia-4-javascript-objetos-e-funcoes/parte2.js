// exercício 1

function isPalindrome(word) {
  let wordReverse = '';
  
  for (let index = word.length - 1; index >= 0; index -= 1) {
    wordReverse += word[index];
  }

  if (word === wordReverse) {
    return true;
  } else {return false;}
}

console.log(isPalindrome('arara'));

 // 2

 function higherNumber(array) {
  let indexNumber = 0;
  let compareNumbers = array[0]

  for (const iterator of array) {
    if (iterator > compareNumbers) {
      indexNumber = array.indexOf(iterator);
      compareNumbers = iterator
    }
  }

  return indexNumber;
 }

console.log(higherNumber([2, 3, 6, 7, 10, 1]));

// 3

function smallestNumber(array) {
  let indexNumber = 0;
  let compareNumbers = array[0]

  for (const iterator of array) {
    if (iterator < compareNumbers) {
      indexNumber = array.indexOf(iterator);
      compareNumbers = iterator
    }
  }

  return indexNumber;
 }

console.log(smallestNumber([2, 4, 6, 7, 10, 0, -3]));

// 4

function biggestName(array) {
  let compareNames = array[0]

  for (const iterator of array) {
    if (iterator.length > compareNames.length) {
      compareNames = iterator
    }
  }

  return compareNames;  
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5

function numberThatRepeatsTheMost(array) {
  let countNumbers = 0;
  let highestRepetition = 0;
  let number = array[0];

  for (let index = 0; index < array.length; index += 1) {
    for (let counter = 0; counter < array.length; counter += 1) {
      if (array[index] === array[counter]) {
        countNumbers += 1;
      }
    }

    if (countNumbers > highestRepetition) {
      highestRepetition = countNumbers;
      number = array[index];
    }
    
    countNumbers = 0;
  }

  return number;
}

console.log(numberThatRepeatsTheMost([2, 3, 2, 5, 8, 2, 3]));

// 6

function summation(number) {
  let result = 1;
  
  for (let index = 2; index <= number; index += 1) {
    result += index
  }

  return result;
}

console.log(summation(5));
