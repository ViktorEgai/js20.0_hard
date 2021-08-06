'use strict';
//  задача 1
let arr = [],
    number;

for (let i = 0; i < 7; i++) {
   number = prompt('Введите любое многозначное число');
  if (number.charAt(0) === '2' || number.charAt(0) === '4') {
  arr.push(number);  
}
}
console.log(arr);

// задача 2
mainLoop:
for (let i = 2; i <= 100; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue mainLoop; 
  }

  console.log( i, ': Делитель этого числа 1 и ', i ); 
}


