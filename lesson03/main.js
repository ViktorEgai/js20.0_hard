let lang = prompt('Введите язык ru или en');
let langArray = [];

if (lang == 'ru') {
  console.log(`
Ппонедельник
Вторник
Среда
Четверг
Ппятница
Суббота
Воскресенье
`);
} else if (lang == 'en') {
  console.log(`
Monday
Tuesday
Wednesday
Thursday
Friday
Sutterday
Sunday
`);
}

switch (lang) {
  case 'ru':
    console.log(`
Ппонедельник
Вторник
Среда
Четверг
Ппятница
Суббота
Воскресенье
`);
break;
  case 'en':
    console.log(`
Monday
Tuesday
Wednesday
Thursday
Friday
Sutterday
Sunday
`);
break;
}
langArray['ru'] = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];
langArray['en'] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Sutterday',
  'Sunday'
];
console.log(langArray[lang]);

let namePerson = prompt('Введите имя');
 
let result = (namePerson == 'Артем') ? console.log('Директор') 
    : (namePerson == 'Максим') ? console.log('Преподаватель') 
    : console.log('Студент');