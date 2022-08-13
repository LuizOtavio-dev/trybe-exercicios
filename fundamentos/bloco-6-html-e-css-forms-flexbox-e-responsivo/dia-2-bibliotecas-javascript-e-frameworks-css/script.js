const btn = document.querySelectorAll('.btn');
const input = document.querySelectorAll('input');
const inputCheckbox = document.querySelector('#agree2');
const nameOfTheDev = document.querySelector('#name');
const emailOfTheDev = document.querySelector('#email');
const textareaAnswer = document.querySelector('#answer');
const paraTextarea = document.querySelector('#ch-counter');

function characterCounter() {
  let count = 0
  paraTextarea.innerText = count + '/500';
  
  textareaAnswer.addEventListener('keyup', function() {
    count = textareaAnswer.value.length;
    paraTextarea.innerText = count + '/500';
  })
}

characterCounter();

function checkEntry() {
  let count = 0;
  if (textareaAnswer.value.length < 10 || nameOfTheDev.value.length > nameOfTheDev.max || emailOfTheDev.value.length > emailOfTheDev.max) {
    count += 1;
  }
  return count;
}

function sendButton() {
  for (let index = 0; index < btn.length; index += 1) {
    if (btn[index].innerText === 'Enviar') {
      btn[index].addEventListener('click', function(event) {
        if (inputCheckbox.checked !== true) {
          event.preventDefault();        
        } else if (checkEntry() !== 0) {
          alert('Dados Inválidos');
        } else {
          alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
          for (let index = 0; index < input.length; index += 1) {
            input[index].value = '';
          }
          textareaAnswer.value = '';
          characterCounter();
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
        textareaAnswer.value = '';
        characterCounter();
      })
    }
  }
}

clearButton();
