import random from 'lodash.random';

const InheritDot = function InheritDot(ctx) {
  this.x = random(0, ctx.canvas.width);
  this.y = random(0, ctx.canvas.height);
};

InheritDot.prototype.updatePosition = function updatePosition(ctx) {
  const gutterSize = 5;

  let newX = this.x + random(-1, 1);
  let newY = this.y + random(-1, 1);

  newX = newX < -gutterSize ? ctx.canvas.width + gutterSize : newX;
  newX = newX > ctx.canvas.width + gutterSize ? -gutterSize : newX;

  newY = newY < -gutterSize ? ctx.canvas.height + gutterSize : newY;
  newY = newY > ctx.canvas.height + gutterSize ? -gutterSize : newY;

  this.x = newX;
  this.y = newY;
};

export default InheritDot;
