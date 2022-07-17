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
