import Tool from './base-tool';

class LineTool extends Tool {
  down({x, y}) {
    this.origX = x;
    this.origY = y;
    return true;
  }

  move({x, y}) {
    this.clearStage();
    this.stagingCtx.beginPath();
    this.stagingCtx.moveTo(this.origX, this.origY);
    this.stagingCtx.lineTo(x, y);
    this.stagingCtx.stroke();
    this.stagingCtx.closePath();
    return false;
  }

  up({x, y}) {
    this.clearStage();
    this.ctx.beginPath();
    this.ctx.moveTo(this.origX, this.origY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave() {
    this.ctx.closePath();
    this.clearStage();
    return false;
  }
}

export default LineTool;
