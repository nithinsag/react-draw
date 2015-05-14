import Tool from './base-tool.js';

class RectTool extends Tool {
  down({x, y}) {
    this.origX = x;
    this.origY = y;
    return true;
  }

  move({x, y}) {
    this.clearStage();

    this.stagingCtx.beginPath();
    this.stagingCtx.rect(this.origX, this.origY, x - this.origX, y - this.origY);
    this.stagingCtx.stroke();
    this.stagingCtx.closePath();
    return false;
  }

  up({x, y}) {
    this.clearStage();

    this.ctx.beginPath();
    this.ctx.rect(this.origX, this.origY, x - this.origX, y - this.origY);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave({x, y}) {
    this.stagingCtx.closePath();
    this.clearStage();
    return false;
  }
}

export default RectTool;
