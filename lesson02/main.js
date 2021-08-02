let num = 266219;
let numToString = num.toString();
let numSplit = numToString.split('');
let digit =  numSplit.map(Number);
let digitMulti = digit.reduce(function(accumulator, currentValue) {  
  return accumulator * currentValue;
});

digitMulti **= 3;
console.log('Возведение в степень 3: ', digitMulti);
console.log('Первые две цифры от полученного числа', digitMulti.toString().substring(0, 2));
