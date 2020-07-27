import random from 'lodash.random';

class Dot {
  updatePosition(ctx) {
    let newX = this.x + random(-1, 1);
    let newY = this.y + random(-1, 1);

    newX = newX < -5 ? ctx.canvas.width + 5 : newX;
    newX = newX > ctx.canvas.width + 5 ? -5 : newX;

    newY = newY < -5 ? ctx.canvas.height + 5 : newY;
    newY = newY > ctx.canvas.height + 5 ? -5 : newY;

    this.x = newX;
    this.y = newY;
  }
}

class ClassDot extends Dot {
  constructor(ctx) {
    super();
    this.x = random(0, ctx.canvas.width);
    this.y = random(0, ctx.canvas.height);
  }
}

export default ClassDot;
