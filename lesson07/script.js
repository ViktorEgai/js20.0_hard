'use strict';
const wrapper = document.querySelector('.wrapper');
const today = new Date();

let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];



function getWeekDay() {
  let days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[today.getDay()];
}

function showWeeks() {
  for( let i = 0; i < weeks.length; i++) {  
    const newEl = document.createElement('div');
    wrapper.appendChild(newEl);
    newEl.innerHTML = weeks[i];

  if (weeks[i] == 'Суббота' || weeks[i] == 'Воскресенье') {
    newEl.classList.add('italic');
  }

  if (getWeekDay(today) === weeks[i]) {
    newEl.classList.add('bold');
  }
  }
}

showWeeks();

