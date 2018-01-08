// let lastTimestamp = 0;
let running = true;

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
  window.requestAnimationFrame(loop);
};

export default {
  loop,
  pause,
  resume,
  init,
};
