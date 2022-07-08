
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (biggestWord.length < array[index].length) {
    biggestWord = array[index];
  };
};

for (let index = 1; index < array.length; index += 1) {
  if (smallestWord.length > array[index].length) {
    smallestWord = array[index];
  };
};

console.log(biggestWord);
console.log(smallestWord);
