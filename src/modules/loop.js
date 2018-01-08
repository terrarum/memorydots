// let lastTimestamp = 0;
let running = true;

const loop = function loop() {
  if (!running) return;
  console.log('run');
  window.requestAnimationFrame(loop);
};

const pause = function pause() {
  running = false;
};

const resume = function resume() {
  running = true;
  window.requestAnimationFrame(loop);
};

const init = function init() {
  window.requestAnimationFrame(loop);
};

export default {
  loop,
  pause,
  resume,
  init,
};
