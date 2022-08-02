function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const daysList = document.querySelector('#days');

  for (const iterator of decemberDaysList) {
    const list = document.createElement('li');
    list.innerText = iterator;
    list.classList = 'day';

    if (iterator === 24 || iterator  === 25  || iterator === 31) {
      list.classList.add('holiday');
    }

    if (iterator === 4 || iterator  === 11  || iterator === 18 || iterator === 25) {
      list.classList.add('friday');
    }

    daysList.appendChild(list);
  }
}

createDays();

// Exercício 2

function createElementButton(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const buttonElement = document.createElement('button');
  buttonElement.id = 'btn-holiday';
  buttonElement.innerText = string;
  btnContainer.appendChild(buttonElement);  
}

createElementButton('Feriados');

// Exercício 3

const btnHoliday = document.querySelector('#btn-holiday');
let count = 0;

function showHolidays() {
  count += 1;
  const classHoliday = document.querySelectorAll('.holiday');
  if (count % 2 === 0) {
    for (let index = 0; index < classHoliday.length; index += 1) {
      classHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
    }  
  } else {
    for (let index = 0; index < classHoliday.length; index += 1) {
      classHoliday[index].style.backgroundColor = 'white';
    }
  }
}

btnHoliday.addEventListener('click', showHolidays);

// Exercício 4

function createFridayButton(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const buttonElement = document.createElement('button');
  buttonElement.innerText = string;
  buttonElement.id = 'btn-friday';
  btnContainer.appendChild(buttonElement);
}

createFridayButton('Sexta-feira');

// Exercício 5

const btnFriday = document.querySelector('#btn-friday');
let counter = 0;

function showFriday() {
  counter += 1;
  const classFriday = document.querySelectorAll('.friday');
  const classDay = document.querySelectorAll('.day');
  if (counter % 2 !== 0) {
    for (let index = 0; index < classFriday.length; index += 1) {
      classFriday[index].innerText = 'Sexta-Feira';
    }
  } else {
    for (let index = 0; index < classDay.length; index += 1) {
      classDay[index].innerText = decemberDaysList[index];
    }
  }
}

btnFriday.addEventListener('click', showFriday)


// Exercício 6

const days = document.querySelectorAll('.day');

function increaseZoomEffect(event) {
  const element = event.target;
  element.style.fontSize = '25px';
}

function decreaseZoomEffect(event) {
  const element = event.target;
  element.style.fontSize = '20px';
}

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', increaseZoomEffect);
  days[index].addEventListener('mouseleave', decreaseZoomEffect);
}

// Exercício 7

const elementClassMyTasks = document.querySelector('.my-tasks');

function addCustomTask(string) {
  const spanElement = document.createElement('span');
  spanElement.innerText = string;
  elementClassMyTasks.appendChild(spanElement);
}

addCustomTask('Cozinhar');

// Exercício 8

function addColor(string) {
  const divElement = document.createElement('div');
  divElement.className = 'task';
  divElement.style.backgroundColor = string;
  elementClassMyTasks.appendChild(divElement);
}

addColor('red');

// Exercício 9

const divClassTask = document.querySelector('.task');

function selectedTask(event) {
  const element = event.target;

  if (element.className === 'task selected') {
    element.classList.remove('selected');
  } else {
    element.classList.add('selected');
  }
}

divClassTask.addEventListener('click', selectedTask);

// Exercício 10

const elementClassSelected = document.querySelector('.task');

function changeColorDay(event) {
  const element = event.target;

  if (elementClassSelected.className === 'task' || element.style.color === elementClassSelected.style.backgroundColor) {
    element.style.color = 'rgb(119,119,119)';
  } else {
    element.style.color = elementClassSelected.style.backgroundColor;
  }
}

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('click', changeColorDay)
}

// Bônus

const addButton = document.querySelector('#btn-add');
const taskList = document.querySelector('.task-list');
const input = document.querySelector('#task-input');

function addCommitment() {
  if (input.value === '') {
    alert('Erro');
  } else {
    const liElement = document.createElement('li');
    liElement.innerText = input.value;
    taskList.appendChild(liElement);
    input.value = '';
  }
}

addButton.addEventListener('click', addCommitment);
input.addEventListener('keypress', (event) => { 
  if (event.key === 'Enter') {
    addCommitment()
  }
});
