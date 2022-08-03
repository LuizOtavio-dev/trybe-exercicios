const body = document.body;
const elementFooter = document.querySelector('#footer');
let placeholderInput = ['Cor de fundo', 'Cor do texto'];
let valueLocalStorage = ['background', 'color'];

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

const btnBackground = document.querySelectorAll('.btn')[0];
btnBackground.addEventListener('click', changeBackgroundColor);

const btnColor = document.querySelectorAll('.btn')[1];
btnColor.addEventListener('click', changeColor)

function initialWebStorage() {
  for (let index = 0; index < valueLocalStorage.length; index += 1) {
    if (localStorage.getItem(valueLocalStorage[index]) === null) {
      localStorage.setItem(valueLocalStorage[index], '');
    } else {
      body.style.backgroundColor = localStorage.getItem(valueLocalStorage[0]);
      body.style.color = localStorage.getItem(valueLocalStorage[1]);
    }
  }
}

window.onload = function() {
  initialWebStorage();
}

