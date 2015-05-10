import Tool from './base-tool.js';

class CircleTool extends Tool {
  down({x, y}) {
    this.origX = x;
    this.origY = y;
    return true;
  }

  up({x, y}) {
    let distance = Math.sqrt((x - this.origX)**2 + (y - this.origY)**2);

    this.ctx.beginPath();
    this.ctx.arc(this.origX, this.origY, distance, 0, 2*Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave() {
    this.ctx.closePath();
    return false;
  }
}

export default CircleTool;
