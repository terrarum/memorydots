import _ from 'lodash';
import updatePosition from './updatePosition';

const CreateDot = function createDot(ctx) {
  this.x = _.random(10, ctx.canvas.width - 10);
  this.y = _.random(10, ctx.canvas.height - 10);
  this.updatePosition = updatePosition;
};

// CreateDot.prototype.updatePosition = updatePosition;

const create = function create(count, ctx) {
  const dots = [];

  for (let i = 0; i < count; i += 1) {
    const dot = new CreateDot(ctx);
    dots.push(dot);
  }

  return dots;
};

export default {
  create,
};
