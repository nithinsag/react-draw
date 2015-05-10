import Tool from './base-tool';

class LineTool extends Tool {
  down({x, y}) {
    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    return true;
  }

  up({x, y}) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave() {
    this.ctx.closePath();
    return false;
  }
}

export default LineTool;
