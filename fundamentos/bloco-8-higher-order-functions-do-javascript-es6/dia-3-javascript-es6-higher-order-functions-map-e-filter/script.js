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

const formatedBookNames = objBooks => objBooks.map(book => `${book.name} - ${book.genre} - ${book.author.name}`);

formatedBookNames(books);

// Exercício 2

const nameAndAge = objBooks => objBooks.map(book => ({
  age: book.releaseYear - book.author.birthYear, author: book.author.name
})).sort((a, b) => a.age - b.age);

nameAndAge(books);

// Exercício 3

const fantasyOrScienceFiction = objBooks => objBooks.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

fantasyOrScienceFiction(books);

// Exercício 4

const oldBooksOrdered = objBooks => objBooks.filter(book => 2022 - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

oldBooksOrdered(books);

// Exercício 5

const fantasyOrScienceFictionAuthors = objBooks => fantasyOrScienceFiction(objBooks).map(book => book.author.name).sort();

fantasyOrScienceFictionAuthors(books);

// Exercício 6

const oldBooks = objBooks => oldBooksOrdered(objBooks).map(book => book.name);

oldBooks(books);

// Exercício 7

const authorWith3DotsOnName = objBooks => objBooks.find(book => (
  book.author.name[1] === '.'
  && book.author.name[4] === '.'
  && book.author.name[7] === '.'
)).name;

console.log(authorWith3DotsOnName(books));