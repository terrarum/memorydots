import './index.scss';

import loop from './modules/loop';
import SimpleDot from './modules/simpleDot';
import InheritDot from './modules/inheritDot';
import ClassDot from './modules/classDot';

const inputDotCount = document.getElementsByClassName('js-dot-count')[0];
const btnClear = document.getElementsByClassName('js-clear')[0];
const btnSimple = document.getElementsByClassName('js-simple')[0];
const btnInherit = document.getElementsByClassName('js-inherit')[0];
const btnClass = document.getElementsByClassName('js-class')[0];
const btnRunToggle = document.getElementsByClassName('js-runtoggle')[0];
const $status = document.getElementsByClassName('js-status')[0];

const canvasEl = document.getElementsByClassName('js-canvas')[0];
let ctx = null;
let dots = [];
let type = null;

const clampDotRange = function clampDotRange() {
  const maxDots = parseInt(inputDotCount.max, 10);
  inputDotCount.value = inputDotCount.value > maxDots ? maxDots : inputDotCount.value;
};

inputDotCount.addEventListener('change', () => {
  clampDotRange();
});

// Clear all dots.
const clear = function clear() {
  $status.innerHTML = 'No Dots';
  dots = [];
};

// Rebuild using dots with their own functions.
const createSimple = function createSimple() {
  $status.innerHTML = 'Simple Dots';
  type = 'simple';
  dots = [];
  const dotCount = inputDotCount.value;

  for (let i = 0; i < dotCount; i += 1) {
    const dot = new SimpleDot(ctx);
    dots.push(dot);
  }
};

// Rebuild using dots with inheritance.
const createInherit = function createInherit() {
  $status.innerHTML = 'Inherited Dots';
  type = 'inherit';
  dots = [];
  const dotCount = inputDotCount.value;

  for (let i = 0; i < dotCount; i += 1) {
    const dot = new InheritDot(ctx);
    dots.push(dot);
  }
};

// Rebuild using dots with inheritance.
const createClass = function createClass() {
  $status.innerHTML = 'Class Dots';
  type = 'class';
  dots = [];
  const dotCount = inputDotCount.value;

  for (let i = 0; i < dotCount; i += 1) {
    const dot = new ClassDot(ctx);
    dots.push(dot);
  }
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

// Update dot positions.
const update = function update() {
  dots.forEach((dot) => {
    dot.updatePosition(ctx, type);
  });
};

// Render the dots.
const render = function render() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  dots.forEach((dot) => {
    let dotXP = dot.x / ctx.canvas.width;
    let dotYP = dot.y / ctx.canvas.height;
    dotXP = dotXP < 0.1 ? 0.1 : dotXP;
    dotXP = dotXP > 0.8 ? 0.8 : dotXP;
    dotYP = dotYP < 0.1 ? 0.1 : dotYP;
    dotYP = dotYP > 0.8 ? 0.8 : dotYP;

    let r = null;
    let g = null;
    let b = null;

    switch (type) {
      case 'simple':
        r = Math.round(255 * dotXP);
        g = Math.round(255 * ((dotYP + dotXP) / 2));
        b = Math.round(255 * (1 - dotYP));
        break;
      case 'inherit':
        r = Math.round(255 * dotYP);
        g = Math.round(255 * ((dotYP + dotXP) / 2));
        b = Math.round(255 * dotXP);
        break;
      case 'class':
        r = Math.round(255 * ((dotYP + dotXP) / 2));
        g = Math.round(255 * dotXP);
        b = Math.round(255 * (1 - dotYP));
        break;
      default:
        throw new Error('Uh oh');
    }

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(dot.x, dot.y, 5, 5);
  });
};

// Set up button listeners and start simple dots.
const init = function init() {
  ctx = canvasEl.getContext('2d');
  ctx.canvas.width = 800;
  ctx.canvas.height = 600;

  btnClear.addEventListener('click', clear);
  btnSimple.addEventListener('click', createSimple);
  btnInherit.addEventListener('click', createInherit);
  btnClass.addEventListener('click', createClass);
  btnRunToggle.addEventListener('click', runToggle);

  createSimple();
  loop.init(update, render, ctx);
};

init();
