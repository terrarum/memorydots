import _ from 'lodash';
import updatePosition from './updatePosition';

const create = function create(count, ctx) {
  const dots = [];

  for (let i = 0; i < count; i += 1) {
    dots.push({
      x: _.random(10, ctx.canvas.width - 10),
      y: _.random(10, ctx.canvas.height - 10),
      updatePosition,
    });
  }

  return dots;
};

export default {
  create,
};
