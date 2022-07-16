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
