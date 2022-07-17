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
