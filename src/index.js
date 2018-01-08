import loop from './modules/loop';

import './index.scss'; // eslint-disable-line

const btnClear = document.getElementsByClassName('js-clear')[0];
const btnSimple = document.getElementsByClassName('js-simple')[0];
const btnInherit = document.getElementsByClassName('js-inherit')[0];
const btnRunToggle = document.getElementsByClassName('js-runtoggle')[0];
const $status = document.getElementsByClassName('js-status')[0];

// Clear all dots.
const clear = function clear() {
  $status.innerHTML = '';
};

// Rebuild using dots with their own functions.
const createSimple = function createSimple() {
  $status.innerHTML = 'Simple Dots';
};

// Rebuild using dots with inheritance.
const createInherit = function createInherit() {
  $status.innerHTML = 'Inherited Dots';
};

// Toggle the run status of the loop.
const runToggle = function runToggle() {
  if (btnRunToggle.innerHTML === 'Pause') {
    loop.pause();
    btnRunToggle.innerHTML = 'Resume';
  }
  else if (btnRunToggle.innerHTML === 'Resume') {
    loop.resume();
    btnRunToggle.innerHTML = 'Pause';
  }
};

// Set up button listeners and start simple dots.
const init = function init() {
  btnClear.addEventListener('click', clear);
  btnSimple.addEventListener('click', createSimple);
  btnInherit.addEventListener('click', createInherit);
  btnRunToggle.addEventListener('click', runToggle);

  createSimple();
};

init();
