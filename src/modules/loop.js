let running = true;
const $stats = document.getElementsByClassName('js-stats')[0];

const options = {
  ctx: null,
  update: null,
  render: null,
};

let lastTimestamp = 0;
let duration = 0;
const loop = function loop(timestamp) {
  duration = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  if (running) {
    options.update();
    options.render();
  }

  $stats.innerHTML = `${(1000 / duration).toFixed(0)}fps<br>${duration.toFixed(2)}ms`;
  window.requestAnimationFrame(loop);
};

const pause = function pause() {
  running = false;
};

const resume = function resume() {
  running = true;
};

const init = function init(update, render, ctx) {
  options.ctx = ctx;
  options.update = update;
  options.render = render;

  // Set up the canvas.
  const canvas = ctx.canvas;

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
