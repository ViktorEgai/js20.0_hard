'use strict';
const dateA = document.getElementById('dateA');
const dateB = document.getElementById('dateB');

// a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'

function showTime() {
  let date = new Date(),
    days = ['Воскреcенье', 'Понедельник',  'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября','декабря'],
    year = date.getFullYear(),
    day = date.getDate(),
    hour =  date.getHours(),
    minute =  date.getMinutes(),
    second =  date.getSeconds(),
    weekName = getWeekName(),
    monthName = getMonthName();

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
    if (hour === 1) return  hour + ' час';
    if (hour % 10 === 2 || hour % 10 === 3 || hour % 10 === 4) return  hour + ' часа';
    if (hour > 4 && hour < 21) return  hour + ' часов';
  }

  function getMinute() {  
    if (minute % 10 === 0 ||
        (minute > 4 && minute <= 20) ||
        (minute > 24 && minute <= 30) ||
        (minute > 34 && minute <= 40) ||
        (minute > 44 && minute <= 50) ||
        (minute > 54 && minute <= 60)) return minute + ' минут';
    if (minute === 1) return minute + ' минута';
    if (minute % 10 === 2 || minute % 10 === 3 || minute % 10 === 4) return  minute + ' минуты';
  }

  function getSecond() {       
    if (second % 10 === 0 ||
      (second > 4 && second <= 20) ||
      (second > 24 && second <= 30) ||
      (second > 34 && second <= 40) ||
      (second > 44 && second <= 50) ||
        (second > 54 && second <= 60)) return second + ' секунд'; 
    if (second === 1|| second === 11|| second === 21 ||second === 31 || second === 41 ||
      second === 51) return second + ' секунда'; 
    if (second % 10 === 2 || second % 10 === 3 || second % 10 === 4) return second + ' секунды'; 
  } 
  dateA.innerHTML = `Сегодня ${weekName}, ${day} ${monthName} ${year} года. ${getHour()} ${getMinute()} ${getSecond()} `
}

// б) '04.02.2020 - 21:05:33' 

function showTime2() {
  let date = new Date(),  
      year = date.getFullYear(),
      day = date.getDate(),
      hour =  date.getHours(),
      minute =  date.getMinutes(),
      month = date.getMonth() + 1,
      second =  date.getSeconds();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;
  dateB.innerHTML = `${day}.${month}.${year} - ${hour}:${minute}:${second}`
}

setInterval(showTime, 1000);
setInterval(showTime2, 1000);




