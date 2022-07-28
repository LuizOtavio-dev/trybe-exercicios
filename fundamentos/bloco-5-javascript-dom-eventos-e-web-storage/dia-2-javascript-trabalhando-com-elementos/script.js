// Parte 1

const body = document.body;
const h1ChildBody = document.createElement('h1');
const mainChildBody = document.createElement('main');
const sectionChildMain = document.createElement('section');
const sectionSecondChildMain = document.createElement('section');
const sectionThirdChildMain = document.createElement('section');
const pChildSection = document.createElement('p');
const imgChildSectionSecondChildMain = document.createElement('img');
const ulChildSectionThirdChildMain = document.createElement('ul');

h1ChildBody.innerText = 'Exercício 5.2 - JavaScript DOM';
h1ChildBody.className = 'title';
body.appendChild(h1ChildBody);

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

const sectionSecond = document.getElementsByClassName('left-content')[0];
imgChildSectionSecondChildMain.src = 'https://picsum.photos/200';
imgChildSectionSecondChildMain.alt = 'image';
imgChildSectionSecondChildMain.className = 'small-image';
sectionSecond.appendChild(imgChildSectionSecondChildMain);

const sectionThird = document.getElementsByClassName('right-content')[0];
sectionThird.appendChild(ulChildSectionThirdChildMain);

let numbersFull = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (const iterator of numbersFull) {
  const ul = sectionThird.firstElementChild;
  const liChildUlChildSectionThird = document.createElement('li');
  liChildUlChildSectionThird.innerText = iterator;
  ul.appendChild(liChildUlChildSectionThird);
}

for (let index = 0; index < 3; index += 1) {
  const h3ChildMain = document.createElement('h3');
  h3ChildMain.className = 'description';
  main.appendChild(h3ChildMain);
}

const sectionLeft = document.getElementsByClassName('left-content')[0];
main.removeChild(sectionLeft);

const sectionRight = document.getElementsByClassName('right-content')[0];
sectionRight.style.marginRight = 'auto';
