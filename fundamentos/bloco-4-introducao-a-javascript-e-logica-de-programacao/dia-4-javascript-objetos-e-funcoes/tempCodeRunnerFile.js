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