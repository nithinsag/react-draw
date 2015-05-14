import Tool from './base-tool.js';

class CircleTool extends Tool {
  down({x, y}) {
    this.origX = x;
    this.origY = y;
    return true;
  }

  move({x, y}) {
    let distance = Math.sqrt((x - this.origX)**2 + (y - this.origY)**2);

    this.clearStage();
    this.stagingCtx.beginPath();
    this.stagingCtx.arc(this.origX, this.origY, distance, 0, 2*Math.PI);
    this.stagingCtx.stroke();
    this.stagingCtx.closePath();
    return false;
  }

  up({x, y}) {
    let distance = Math.sqrt((x - this.origX)**2 + (y - this.origY)**2);

    this.clearStage();
    this.ctx.beginPath();
    this.ctx.arc(this.origX, this.origY, distance, 0, 2*Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
    return true;
  }

  leave() {
    this.stagingCtx.closePath();
    this.clearStage();
    return false;
  }
}

export default CircleTool;
