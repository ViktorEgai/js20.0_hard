'use strict';
const newFunction = function(arg){
  if  (typeof arg === 'string') {
    arg = arg.trim();
    console.log(arg);
    if (arg.length > 29) {
      arg = arg.slice(0, 29);
      console.log(arg + '...');
    }
  } else {
    console.log('Это не строка');
  }
};
// newFunction('         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum autem reprehenderit rem voluptatem earum voluptatibus quae nobis, beatae adipisci nisi, molestiae harum nulla accusamus facilis libero vel iure ut deserunt.i, molestiae harum nulla accusamus facilis libero vel iure ut deserunt.          ');
newFunction(prompt('Введите любой текст'));
