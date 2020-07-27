import random from 'lodash.random';

const SimpleDot = function SimpleDot(ctx) {
  this.x = random(0, ctx.canvas.width);
  this.y = random(0, ctx.canvas.height);

  this.updatePosition = function updatePosition() {
    let newX = this.x + random(-1, 1);
    let newY = this.y + random(-1, 1);

    newX = newX < -5 ? ctx.canvas.width + 5 : newX;
    newX = newX > ctx.canvas.width + 5 ? -5 : newX;

    newY = newY < -5 ? ctx.canvas.height + 5 : newY;
    newY = newY > ctx.canvas.height + 5 ? -5 : newY;

    this.x = newX;
    this.y = newY;
  };
};

export default SimpleDot;
