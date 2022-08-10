const formElement = document.querySelector('#form');

function createElementButton(text) {
  const element = document.createElement('button');
  element.className = 'btn';
  element.innerText = text
  formElement.appendChild(element);
}

createElementButton('Enviar');
