// Parte 1

const body = document.body;
const h1ChildBody = document.createElement('h1');
const mainChildBody = document.createElement('main');
const sectionChildMain = document.createElement('section');
const sectionSecondChildMain = document.createElement('section');
const sectionThirdChildMain = document.createElement('section');
const pChildSection = document.createElement('p');

h1ChildBody.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1ChildBody)

mainChildBody.className = 'main-content';
body.appendChild(mainChildBody);

const main = document.getElementsByClassName('main-content')[0];
sectionChildMain.className = 'center-content';
main.appendChild(sectionChildMain);

const section = document.getElementsByClassName('center-content')[0];
pChildSection.innerText = 'Parágrafo';
section.appendChild(pChildSection);

sectionSecondChildMain.className = 'left-content';
main.appendChild(sectionSecondChildMain);

sectionThirdChildMain.className = 'right-content';
main.appendChild(sectionThirdChildMain);
