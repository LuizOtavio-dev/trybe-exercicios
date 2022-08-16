const btn = document.querySelectorAll('.btn');
const input = document.querySelectorAll('input');
const inputCheckbox = document.querySelector('#agree2');
const nameOfTheDev = document.querySelector('#name');
const emailOfTheDev = document.querySelector('#email');
const textareaAnswer = document.querySelector('#answer');
const paraTextarea = document.querySelector('#ch-counter');

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  }
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Dados Inválidos',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Dados Inválidos',
    },
    {
      rule: 'required',
      errorMessage: 'Este campo é obrigatório!',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Este campo é obrigatório!',
    },
    {
      rule: 'email',
      errorMessage: 'Dados Inválidos',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Dados Inválidos',
    },
  ])
  .addField('#answer', [
    {
      rule: 'required',
      errorMessage: 'Este campo é obrigatório!',
    }
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

function characterCounter() {
  let count = 0
  paraTextarea.innerText = count + '/500';
  
  textareaAnswer.addEventListener('keyup', function() {
    count = textareaAnswer.value.length;
    paraTextarea.innerText = count + '/500';
  })
}

characterCounter();

function sendButton() {
  for (let index = 0; index < btn.length; index += 1) {
    if (btn[index].innerText === 'Enviar') {
      btn[index].addEventListener('click', function(event) {
        if (inputCheckbox.checked !== true) {
          event.preventDefault();        
        } else {
          alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
          for (let index = 0; index < input.length; index += 1) {
            input[index].value = '';
            input[index].checked = false;
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
          input[index].checked = false;

        }
        textareaAnswer.value = '';
        characterCounter();
      })
    }
  }
}

clearButton();
