import _ from 'lodash';
import updatePosition from './updatePosition';

const SimpleDot = function SimpleDot(ctx) {
  const dot = {
    x: _.random(10, ctx.canvas.width - 10),
    y: _.random(10, ctx.canvas.height - 10),
    updatePosition,
  };

  return dot;
};

export default SimpleDot;
