import Tool from './base-tool.js';

class RectTool extends Tool {
  down({x, y}) {
    this.origX = x;
    this.origY = y;
    return true;
  }

  up({x, y}) {
    this.ctx.beginPath();
    this.ctx.rect(this.origX, this.origY, x - this.origX, y - this.origY);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave({x, y}) {
    this.ctx.closePath();
    return false;
  }
}

export default RectTool;
