// Parte 1

const body = document.body;
const elementH1 = document.createElement('h1');
const elementMain = document.createElement('main');
const elementSection = document.createElement('section');
const elementPara = document.createElement('p');

elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(elementH1)

elementMain.className = 'main-content';
body.appendChild(elementMain);

const main = document.getElementsByClassName('main-content')[0];
elementSection.className = 'center-content';
main.appendChild(elementSection);

const section = document.getElementsByClassName('center-content')[0];
elementPara.innerText = 'Parágrafo';
section.appendChild(elementPara);
