import random from 'lodash.random';
import updatePosition from './updatePosition';

function SimpleDot(ctx) {
  this.x = random(0, ctx.canvas.width);
  this.y = random(0, ctx.canvas.height);

  this.updatePosition = updatePosition;
}

export default SimpleDot;
