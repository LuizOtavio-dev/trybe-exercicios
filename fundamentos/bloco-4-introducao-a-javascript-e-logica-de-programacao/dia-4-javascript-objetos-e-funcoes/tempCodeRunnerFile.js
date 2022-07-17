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
