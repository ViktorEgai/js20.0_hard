'use strict';
const dateA = document.getElementById('dateA');
const dateB = document.getElementById('dateB');

let date = new Date();
let days = [
          'Воскреcенье', 
          'Понедельник', 
          'Вторник', 
          'Среда', 
          'Четверг', 
          'Пятница', 
          'Суббота'
          ];
let months = [            
            'января', 
            'февраля', 
            'марта', 
            'апреля', 
            'мая', 
            'июня', 
            'июля', 
            'августа', 
            'сентября', 
            'октября', 
            'ноября',
            'декабря'
            ];

let year = date.getFullYear();
let day = date.getDate();
let hour =  date.getHours();
let minute =  date.getMinutes();
let second =  date.getSeconds();
// console.log(date.toLocaleDateString('ru-RU'));
    // a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  

let weekName = getWeekName();
let monthName = getMonthName();


function getWeekName() {
let weekDay = date.getDay();
 for (let i = 0; i < days.length; i++) {
   if (i === weekDay) {
      return days[i];
   }
 }
}

function getMonthName() {
const month = date.getMonth();
 for (let i = 0; i < months.length; i++) {
   if (i === month) {
      return months[i];
   }
 }
}

  function getHour() {
    if (hour % 10 === 1) return  hour + ' час';
    if (hour % 10 === 2 || hour % 10 === 3 || hour % 10 === 4) return  hour + ' часа';
    if (hour > 4 && hour < 21) return  hour + ' часов';
  }
  function getMinute() {  
    if (minute % 10 === 0 ||
       (minute > 4 && minute < 20) ||
       (minute > 24 && minute < 30) ||
       (minute > 34 && minute < 40) ||
       (minute > 44 && minute < 50) ||
       (minute > 54 && minute < 60)) return minute + ' минут';
    if (minute % 10 === 1) return minute + ' минута';
    if (minute % 10 === 2 || minute % 10 === 3 || minute % 10 === 4) return  minute + ' минуты';
  }

  function getSecond() {  
    if (second % 10 === 0 ||
       (second > 4 && second < 20) ||
       (second > 24 && second < 30) ||
       (second > 34 && second < 40) ||
       (second > 44 && second < 50) ||
       (second > 54 && second < 60)) return second + ' секунд';
    if (second % 10 === 1) return second + ' секунда';
    if (second % 10 === 2 || second % 10 === 3 || second % 10 === 4) return  second + ' секунды';
  }



    // б) '04.02.2020 - 21:05:33' 

  console.log(date.toLocaleDateString('ru-RU',{day:'2-digit', month:'2-digit', year:'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'}));

dateA.innerHTML = `Сегодня ${getWeekName()}, ${day} ${getMonthName()} ${year} года,
  ${getHour()} ${getMinute()} ${getSecond()} `;
dateB.innerHTML = date.toLocaleDateString('ru-RU',{day:'2-digit', month:'2-digit', year:'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'});

