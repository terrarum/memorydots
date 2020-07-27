import random from 'lodash.random';
import updatePosition from './updatePosition';

const InheritDot = function InheritDot(ctx) {
  this.x = random(0, ctx.canvas.width);
  this.y = random(0, ctx.canvas.height);
};

InheritDot.prototype.updatePosition = updatePosition;

export default InheritDot;
