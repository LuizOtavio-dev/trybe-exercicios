// exercícios 1, 2, 3, 4 e 5

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';
console.log(info);

for (const key in info) {
  console.log(key);
}

for (const key in info) {
  console.log(info[key]);
}

for (const key in info) {
  if (info[key] !== infoTioPatinhas[key]) {
    console.log(info[key] + ' e ' + infoTioPatinhas[key]);
  } else {console.log('Ambos recorrentes')}
}

// exercícios 6, 7 e 8

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama "  + "'" + leitor.livrosFavoritos[0].titulo + "'");

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
