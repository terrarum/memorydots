import _ from 'lodash';
import updatePosition from './updatePosition';

const InheritDot = function InheritDot(ctx) {
  this.x = _.random(0, ctx.canvas.width);
  this.y = _.random(0, ctx.canvas.height);
};

InheritDot.prototype.updatePosition = updatePosition;

export default InheritDot;
