import _ from 'lodash';
// import updatePosition from './updatePosition';

const InheritDot = function InheritDot(ctx) {
  this.x = _.random(0, ctx.canvas.width);
  this.y = _.random(0, ctx.canvas.height);
};

InheritDot.prototype.updatePosition = function (ctx) {
  let newX = this.x + _.random(-1, 1);
  let newY = this.y + _.random(-1, 1);

  newX = newX < -5 ? ctx.canvas.width + 5 : newX;
  newX = newX > ctx.canvas.width + 5 ? -5 : newX;

  newY = newY < -5 ? ctx.canvas.height + 5 : newY;
  newY = newY > ctx.canvas.height + 5 ? -5 : newY;

  this.x = newX;
  this.y = newY;
};

export default InheritDot;
