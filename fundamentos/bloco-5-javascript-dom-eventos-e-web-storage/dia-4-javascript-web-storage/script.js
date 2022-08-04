const body = document.body;
const elementFooter = document.querySelector('#footer');
const elementHeader = document.querySelector('h1');
const elementPara = document.querySelector('p');
let placeholderInput = ['Cor de fundo', 'Cor do texto', 'Tamanho da fonte ex.: 50px', 'Espaçamento ex.: 50px'];
let valueLocalStorage = ['background', 'color', 'fontSize', 'line'];

for (let index = 0; index < placeholderInput.length; index += 1) {
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = placeholderInput[index];
  inputElement.className = 'input';
  elementFooter.appendChild(inputElement);
  
  const btnElement = document.createElement('button');
  btnElement.innerText = 'Mudar';
  btnElement.className = 'btn';
  elementFooter.appendChild(btnElement);
}

function changeBackgroundColor() {
  const input = document.querySelectorAll('.input')[0];
  localStorage.setItem('background', input.value);
  body.style.backgroundColor = input.value;
  input.value = '';
}

function changeColor() {
  const input = document.querySelectorAll('.input')[1];
  localStorage.setItem('color', input.value);
  body.style.color = input.value;
  input.value = '';
}

function changeFontSize() {
  const input = document.querySelectorAll('.input')[2];
  localStorage.setItem('fontSize', input.value);
  elementHeader.style.fontSize = input.value;
  elementPara.style.fontSize = input.value;
  input.value = '';
}

function changeLine() {
  const input = document.querySelectorAll('.input')[3];
  localStorage.setItem('line', input.value);
  elementPara.style.lineHeight = input.value;
  input.value = '';
}

const btnBackground = document.querySelectorAll('.btn')[0];
btnBackground.addEventListener('click', changeBackgroundColor);

const btnColor = document.querySelectorAll('.btn')[1];
btnColor.addEventListener('click', changeColor);

const btnFontSize = document.querySelectorAll('.btn')[2];
btnFontSize.addEventListener('click', changeFontSize);

const btnLine = document.querySelectorAll('.btn')[3];
btnLine.addEventListener('click', changeLine);

function initialWebStorage() {
  for (let index = 0; index < valueLocalStorage.length; index += 1) {
    if (localStorage.getItem(valueLocalStorage[index]) === null) {
      localStorage.setItem(valueLocalStorage[index], '');
    } else {
      body.style.backgroundColor = localStorage.getItem(valueLocalStorage[0]);
      body.style.color = localStorage.getItem(valueLocalStorage[1]);
      elementHeader.style.fontSize = localStorage.getItem(valueLocalStorage[2]);
      elementPara.style.fontSize = localStorage.getItem(valueLocalStorage[2]);
      elementPara.style.lineHeight = localStorage.getItem(valueLocalStorage[3]);
    }
  }
}

window.onload = function() {
  initialWebStorage();
}

