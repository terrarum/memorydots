import _ from 'lodash';
import updatePosition from './updatePosition';

const SimpleDot = function SimpleDot(ctx) {
  const dot = {
    x: _.random(0, ctx.canvas.width),
    y: _.random(0, ctx.canvas.height),
    updatePosition,
  };

  return dot;
};

export default SimpleDot;
