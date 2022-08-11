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
const inputCheckbox = document.querySelector('#agree2');
const nameOfTheDev = document.querySelector('#name');
const emailOfTheDev = document.querySelector('#email');
const textareaAnswer = document.querySelector('#answer');
const paraTextarea = document.querySelector('#textarea');

function sendButton() {
  for (let index = 0; index < btn.length; index += 1) {
    if (btn[index].innerText === 'Enviar') {
      btn[index].addEventListener('click', function(event) {
        if (inputCheckbox.checked !== true) {
          event.preventDefault();        
        }
        if (nameOfTheDev.value.length > nameOfTheDev.max || emailOfTheDev.value.length > emailOfTheDev.max) {
          alert('Dados Inválidos');
        } else {
          alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
        }
      })
    }
  }
}

sendButton();

function clearButton() {
  for (let index = 0; index < btn.length; index += 1) {
    if (btn[index].innerText === 'Limpar') {
      btn[index].addEventListener('click', function() {
        for (let index = 0; index < input.length; index += 1) {
          input[index].value = '';
        }
      })
    }
  }
}

clearButton();

let count = 0
paraTextarea.innerText = count + '/500';

textareaAnswer.addEventListener('keyup', function(event) {
  count = textareaAnswer.value.length;
  paraTextarea.innerText = count + '/500';
})
