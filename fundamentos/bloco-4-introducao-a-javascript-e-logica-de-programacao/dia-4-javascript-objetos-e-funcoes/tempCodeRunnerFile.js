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
