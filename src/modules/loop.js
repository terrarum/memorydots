// let lastTimestamp = 0;
let running = true;

const canvasEl = document.getElementsByClassName('js-canvas')[0];

let canvas = null;
let ctx = null;

const options = {
  update: null,
  render: null,
};

const loop = function loop() {
  if (running) {
    options.update();
  }
  options.render();

  window.requestAnimationFrame(loop);
};

const pause = function pause() {
  running = false;
};

const resume = function resume() {
  running = true;
};

const init = function init(update, render) {
  options.update = update;
  options.render = render;

  // Set up the canvas.
  ctx = canvasEl.getContext('2d');
  canvas = ctx.canvas;

  canvas.width = 800;
  canvas.height = 600;

  window.requestAnimationFrame(loop);
};

export default {
  loop,
  pause,
  resume,
  init,
};
