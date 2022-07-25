// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//   - document.getElementById()
//   - document.getElementsByClassName()
//   - document.getElementsByTagName()
//  Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText() {
  const p = document.getElementsByTagName('p');
  p[1].innerText = 'Daqui 2 anos me vejo trabalhando como Desenvolvedor';
};
changeText();

//  Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSquareToGreen() {
  const main = document.getElementsByClassName('main-content');
  main[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

//  Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function changeSquareToWhite() {
  const section = document.getElementsByClassName('center-content');
  section[0].style.backgroundColor = 'white';
}
changeSquareToWhite();

//  Crie e execute uma função que corrija o texto da tag <h1>.

function correctTitle() {
  const h1 = document.getElementsByTagName('h1');
  h1[0].innerText = 'Exercício 5.1 - JavaScript';
}
correctTitle();

//  Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragraphUpperCase() {
  const p = document.getElementsByTagName('p');
  p[0].innerText = p[0].innerText.toUpperCase();
}
paragraphUpperCase();

//  Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function allParagraphs() {
  const p = document.getElementsByTagName('p');
  for (let index = 0; index < p.length; index += 1) {
    console.log(p[index].innerText);
  }
}
allParagraphs();
