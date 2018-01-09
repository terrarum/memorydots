import _ from 'lodash';

export default function updatePosition(dt, ctx) {
  let newX = this.x + _.random(-1, 1);
  let newY = this.y + _.random(-1, 1);

  newX = newX < 0 ? ctx.canvas.width : newX;
  newX = newX > ctx.canvas.width ? 0 : newX;

  newY = newY < 0 ? ctx.canvas.height : newY;
  newY = newY > ctx.canvas.height ? 0 : newY;

  this.x = newX;
  this.y = newY;
}
