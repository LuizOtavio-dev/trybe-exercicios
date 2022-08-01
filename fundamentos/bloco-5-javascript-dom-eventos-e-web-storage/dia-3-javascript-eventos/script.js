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

function createDays() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
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
