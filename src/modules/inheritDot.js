import _ from 'lodash';
import updatePosition from './updatePosition';

const InheritDot = function InheritDot(ctx) {
  this.x = _.random(10, ctx.canvas.width - 10);
  this.y = _.random(10, ctx.canvas.height - 10);
};

InheritDot.prototype.updatePosition = updatePosition;

export default InheritDot;
