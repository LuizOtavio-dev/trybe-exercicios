const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 1

const authorBornIn1947 = (books) => (books.find((book) => book.author.birthYear === 1947));

authorBornIn1947(books);

// Exercício 2

const smallerName = books => {
  let nameBook = books[0].name;
  books.forEach(book => {if (book.name.length < nameBook.length) nameBook = book.name});
  return nameBook;
}

smallerName(books);

// Exercício 3

const getNamedBook = books => books.find((book) => book.name.length === 26);

getNamedBook(books);

// Exercício 4

const booksOrderedByReleaseYearDesc = books => books.sort((a, b) => b.releaseYear - a.releaseYear);

booksOrderedByReleaseYearDesc(books);

// Exercício 5

const everyoneWasBornOnSecXX = books => books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);

everyoneWasBornOnSecXX(books);

// Exercício 6

const someBookWasReleaseOnThe80s = books => books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1989);

someBookWasReleaseOnThe80s(books);

// Exercício 7

const authorUnique = books => {
  return books.every(bookEvery =>
    !books.some(bookSome =>
      (bookSome.author.birthYear === bookEvery.author.birthYear)
      && (bookSome.author.name !== bookEvery.author.name)
    )
  )
};

console.log(authorUnique(books));