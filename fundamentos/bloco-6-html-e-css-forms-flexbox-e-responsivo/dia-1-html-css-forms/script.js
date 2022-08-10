const formElement = document.querySelector('#form');

function createElementButton(text) {
  const element = document.createElement('button');
  element.className = 'btn';
  element.innerText = text;
  formElement.appendChild(element);
}

createElementButton('Enviar');
createElementButton('Limpar');

const btn = document.querySelectorAll('.btn');
const input = document.querySelectorAll('input');

for (let index = 0; index < btn.length; index += 1) {
  if (btn[index].innerText === 'Enviar') {
    btn[index].addEventListener('click', function(event) {
      event.preventDefault();
    })
  }
  if (btn[index].innerText === 'Limpar') {
    btn[index].addEventListener('click', function() {
      for (let index = 0; index < input.length; index += 1) {
        input[index].value = '';
      }
    })
  }
}
  