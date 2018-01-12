import _ from 'lodash';

export default function updatePosition(ctx) {
  let newX = this.x + _.random(-1, 1);
  let newY = this.y + _.random(-1, 1);

  newX = newX < -5 ? ctx.canvas.width + 5 : newX;
  newX = newX > ctx.canvas.width + 5 ? -5 : newX;

  newY = newY < -5 ? ctx.canvas.height + 5 : newY;
  newY = newY > ctx.canvas.height + 5 ? -5 : newY;

  this.x = newX;
  this.y = newY;
}
