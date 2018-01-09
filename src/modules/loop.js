// let lastTimestamp = 0;
let running = true;

const options = {
  ctx: null,
  update: null,
  render: null,
};

const loop = function loop() {
  if (running) {
    options.update(1);
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
