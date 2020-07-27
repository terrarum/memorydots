import _ from 'lodash';
import updatePosition from './updatePosition';

const SimpleDot = function SimpleDot(ctx) {
  this.x = _.random(0, ctx.canvas.width);
  this.y = _.random(0, ctx.canvas.height);

  this.updatePosition = updatePosition;
};

export default SimpleDot;
