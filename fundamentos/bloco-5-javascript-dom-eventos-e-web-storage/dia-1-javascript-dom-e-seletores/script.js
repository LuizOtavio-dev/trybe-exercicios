// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//   - document.getElementById()
//   - document.getElementsByClassName()
//   - document.getElementsByTagName()
//  Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const p = document.getElementsByTagName('p');
p[1].innerText = 'Daqui 2 anos me vejo trabalhando como Desenvolvedor';

//  Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

const main = document.getElementsByClassName('main-content');
main[0].style.backgroundColor = 'rgb(76,164,109)';

//  Crie e execute uma função que mude a cor do quadrado vermelho para branco.

//  Crie e execute uma função que corrija o texto da tag <h1>.

//  Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

//  Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
