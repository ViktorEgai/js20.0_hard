'use strict';
const colorName = document.querySelector('#color'),
      button = document.querySelector('#btn');
const getColor = function () {
  let characters = "0123456789abcdef"
  let str = "";
  for(let i = 0; i < 6; i++) {
    str += characters[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = '#' + str;
  colorName.textContent = '#' + str;  
}
getColor();


button.addEventListener('click', () => {
getColor();
})
