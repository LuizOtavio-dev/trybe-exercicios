const elementFooter = document.querySelector('#footer');
let placeholderInput = ['Cor de fundo'];
let valueLocalStorage = ['background'];

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
  const body = document.body;
  body.style.backgroundColor = input.value
  localStorage.setItem('background', input.value);
  input.value = '';
}

const btnBackground = document.querySelectorAll('.btn')[0];
btnBackground.addEventListener('click', changeBackgroundColor);;

function initialWebStorage() {
  const body = document.body;
  for (let index = 0; index < valueLocalStorage.length; index += 1) {
    if (localStorage.getItem(valueLocalStorage[index]) === null) {
      localStorage.setItem(valueLocalStorage[index], '');
    } else {
      body.style.backgroundColor = localStorage.getItem(valueLocalStorage[index]);
    }
  }
}

window.onload = function() {
  initialWebStorage();
}

