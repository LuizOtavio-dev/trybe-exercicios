# Dia 2

O objetivo dos exercícios desse dia foi colocar em prática o que aprendi sobre algumas HOFs que são utilizadas com arrays; 🚀 

Os requisitos do exercício são:

### Instruções para a realização dos exercícios

  Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

  Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

  Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

### Organizando uma biblioteca

  Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions, template literals, objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

  Utilize o seguinte código como template para realizar os exercícios:

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

  // Adicione o código do exercício aqui:

1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  function authorBornIn1947() {
    // escreva aqui o seu código
  }

2. Retorne o nome do livro de menor nome.

  function smallerName() {
    let nameBook;
    // escreva aqui o seu código

    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

3. Encontre o primeiro livro cujo nome possui 26 caracteres.

  const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
          name: 'George R. R. Martin',
      birthYear: 1948,
    },
      releaseYear: 1991,
  };
  function getNamedBook() {
    // escreva seu código aqui
  }

4. Ordene os livros por data de lançamento em ordem decrescente.

  const expectedResult = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];

  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
  }

5. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

  const expectedResult = false;

  function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
  }

6. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

  const expectedResult = true;

  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
  }

7. Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

  const expectedResult = false;

  function authorUnique() {
    // escreva seu código aqui
  }