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