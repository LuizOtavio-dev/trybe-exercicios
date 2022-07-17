function endOfWord(word, ending) {
  let isTrue = false;

  if (word.length > ending.length && word.slice(word.length - ending.length) === ending) {
    isTrue = true;
  }

  return isTrue;
}

console.log(endOfWord('trybe', 'be'));
