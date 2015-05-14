class Tool {
  constructor(draw) {
    this.ctx = draw.ctx;
    this.stagingCtx = draw.stagingCtx;
  }

  clearStage() {
    this.stagingCtx.clearRect(0, 0, this.stagingCtx.canvas.width, this.stagingCtx.canvas.height);
  }

  down({x, y}) {
    return false;
  }

  move({x, y}) {
    return false;
  }

  up({x, y}) {
    return false;
  }

  leave({x, y}) {
    return false;
  }
}

// Clear parts of the canvas under the cursor
class EraserTool extends Tool {
}

// Stamp shapes onto the canvas
class BrushTool extends Tool {
}

// Paste images onto the canvas
class StampTool extends Tool {
}

// Draw letters onto the canvas
class LetterTool extends Tool {
}

export default Tool;
