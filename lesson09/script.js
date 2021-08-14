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
    if (hour === 1 || hour === 21)  return  hour + ' час';
    if (hour > 21) return  hour + ' часа';
    if (hour > 4 && hour < 21) return  hour + ' часов';
  }

  function getTime(type, arr) {  
    if (type === 1 || type === 21 || type === 31 || type === 41 ||
      type === 51) return type + arr[0];
    if (type % 10 === 0 ||
        (type > 4 && type <= 20) ||
        (type > 24 && type <= 30) ||
        (type > 34 && type <= 40) ||
        (type > 44 && type <= 50) ||
        (type > 54 && type <= 60)) return type + arr[1];
    if (type % 10 === 2 || type % 10 === 3 || type % 10 === 4) return  type + arr[2];
  }  
  dateA.innerHTML = `Сегодня ${weekName}, ${day} ${monthName} ${year} года. ${getHour()} ${getTime(minute, [' минута', ' минут', ' минуты'])} ${getTime(second, [' секунда', ' секунд', ' секунды'])} `
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




