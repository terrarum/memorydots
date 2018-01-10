import _ from 'lodash';
import updatePosition from './updatePosition';

const createDot = function createDot(ctx) {
  const dot = {
    x: _.random(10, ctx.canvas.width - 10),
    y: _.random(10, ctx.canvas.height - 10),
    updatePosition,
  };

  return dot;
};

const create = function create(count, ctx) {
  const dots = [];

  for (let i = 0; i < count; i += 1) {
    const dot = createDot(ctx);
    dots.push(dot);
  }

  return dots;
};

export default {
  create,
};
