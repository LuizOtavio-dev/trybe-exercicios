// Parte 1

const body = document.body;
const elementH1 = document.createElement('h1');
const elementMain = document.createElement('main');

elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(elementH1)

elementMain.className = 'main-content';
body.appendChild(elementMain);
