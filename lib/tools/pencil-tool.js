import Tool from './base-tool.js';

class PencilTool extends Tool {
  down({x, y}) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    return true;
  }

  move({x, y}) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    return true;
  }

  up() {
    this.ctx.closePath();
    return false;
  }

  leave() {
    this.ctx.closePath();
    return false;
  }
}

export default PencilTool;
