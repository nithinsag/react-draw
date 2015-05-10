class Tool {
  constructor(ctx) {
    this.ctx = ctx;
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
