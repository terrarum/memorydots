import random from 'lodash.random';

function InheritDot(ctx) {
  this.x = random(0, ctx.canvas.width);
  this.y = random(0, ctx.canvas.height);
}

InheritDot.prototype.updatePosition = function updatePosition(ctx) {
  const gutter = 5;
  const canvasWidth = ctx.canvas.width + gutter;
  const canvasHeight = ctx.canvas.height + gutter;

  let newX = this.x + random(-1, 1);
  let newY = this.y + random(-1, 1);

  newX = newX < -gutter ? canvasWidth : newX;
  newX = newX > canvasWidth ? -gutter : newX;

  newY = newY < -gutter ? canvasHeight : newY;
  newY = newY > canvasHeight ? -gutter : newY;

  this.x = newX;
  this.y = newY;
};

export default InheritDot;
