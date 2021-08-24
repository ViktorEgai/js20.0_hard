const input = document.querySelector('#input');
const text = document.querySelector('#text');

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}

const addText = () => {
  text.textContent = input.value;
}

input.addEventListener('input', debounce(addText, 300));


