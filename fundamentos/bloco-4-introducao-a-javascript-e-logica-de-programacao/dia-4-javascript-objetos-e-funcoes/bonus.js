// 1

let romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function whatRomanNumber(number) {
  number = number.toUpperCase();
  let sum = romanNumbers[number[number.length - 1]];
  let current = romanNumbers[number[number.length - 1]];

  for (let index = 2; index <= number.length; index++) {
    const next = romanNumbers[number[number.length - index]]

    if (current <= next) {
      sum += next;
    } else {
      sum -= next;
    }
    current = next;
  }
  return sum;
}

console.log(whatRomanNumber('vi'));

// 2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array) {
  let evenNumbers = [];
  for (let index = 0; index < array.length; index++) {
    for (let counter = 0; counter < array[index].length; counter += 1) {
      if (array[index][counter] % 2 === 0) {
        evenNumbers.push(array[index][counter]);
      }
    }
  }

  return evenNumbers;
}

console.log(arrayOfNumbers(vector));

// 3

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function objectOfFruits(array) {
  let fruits = {};
  let phrase = [];
  
  for (let index = 0; index < array.length; index += 1) {
    fruits[array[index]] = 0;
  }

  for (let index = 0; index < array.length; index += 1) {
    for (const key in fruits) {
      if (key === array[index]) {
        fruits[key] += 1;
      }
    }
  }

  for (const key in fruits) {
    let fruit = fruits[key] + ' ' + key;
    if (fruits[key] > 1) {
      fruit += 's';
    }
    phrase.push(fruit);
  }
  
  return console.log('Sua cesta possui: ' + phrase.join(', ') + '.');
}

objectOfFruits(basket);

// 4

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

function lastResident(object) {
  const name = object.blocoDois[object.blocoDois.length - 1].nome;
  const lastName = object.blocoDois[object.blocoDois.length - 1].sobrenome;
  const flat = object.blocoDois[object.blocoDois.length - 1].andar;
  const apartment = object.blocoDois[object.blocoDois.length - 1].apartamento;
  console.log('O morador do bloco 2 de nome ' + name + ' ' + lastName + ' mora no ' + flat + '° andar, apartamento ' + apartment);
}

lastResident(moradores);

// 5

function fullName(object) {
  for (let index = 0; index < object.blocoUm.length; index += 1) {
    const name = object.blocoUm[index].nome;
    const lastName = object.blocoUm[index].sobrenome;
    console.log('morador ' + (index + 1) + ' Bloco 1: ' + name + ' ' + lastName);
  }

  for (let index = 0; index < object.blocoDois.length; index += 1) {
    const name = object.blocoDois[index].nome;
    const lastName = object.blocoDois[index].sobrenome;
    console.log('morador ' + (index + 1) + ' Bloco 2: ' + name + ' ' + lastName);
  }
}

fullName(moradores);
