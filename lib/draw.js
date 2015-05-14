import {Base} from './utils';
import History from './history';
import {PencilTool, LineTool, CircleTool, RectTool, FillTool} from './tools';

class Draw extends Base {
  constructor(options) {
    let {canvas, stagingCanvas} = options;

    super()

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.stagingCanvas = stagingCanvas;
    this.stagingCtx = stagingCanvas.getContext('2d');

    this.setColor(options.color);
    this.setWidth(options.lineWidth);

    this.bind(this, 'getTool', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onMouseLeave', 'render');

    stagingCanvas.addEventListener('mousedown', this.onMouseDown);
    stagingCanvas.addEventListener('mousemove', this.onMouseMove);
    stagingCanvas.addEventListener('mouseup', this.onMouseUp);
    stagingCanvas.addEventListener('mouseleave', this.onMouseLeave);

    this.tools = {
      pencil: new PencilTool(this),
      fill: new FillTool(this),
      line: new LineTool(this),
      circle: new CircleTool(this),
      rect: new RectTool(this)
    };
    this.toolName = options.toolName || 'pencil';

    this.history = new History(options);

    this.dragging = false;
  }

  getCoords(e) {
    let boundingClientRect = this.canvas.getBoundingClientRect();
    return {
      x: e.x - boundingClientRect.left,
      y: e.y - boundingClientRect.top
    };
  }

  getTool() {
    return this.tools[this.toolName];
  }

  setCtx(property, value) {
    this.ctx[property] = value;
    this.stagingCtx[property] = value;
  }

  setColor(color) {
    this.setCtx('strokeStyle', color);
  }

  setWidth(width) {
    this.setCtx('lineWidth', width);
  }

  setTool(toolName) {
    this.toolName = toolName;
  }

  onMouseDown(e) {
    let coords = this.getCoords(e);
    this.dragging = true;

    if (!this.getTool().down(coords)) {
      return;
    }

    this.history.record({
      action: 'down',
      color: this.ctx.strokeStyle,
      toolName: this.toolName,
      width: this.ctx.lineWidth,
      x: coords.x,
      y: coords.y
    });
  }

  onMouseMove(e) {
    if (!this.dragging) {
      return;
    }
    let coords = this.getCoords(e);

    if (!this.getTool().move(coords)) {
      return;
    }

    this.history.record({
      action: 'move',
      color: this.ctx.strokeStyle,
      toolName: this.toolName,
      width: this.ctx.lineWidth,
      x: coords.x,
      y: coords.y
    });
  }

  onMouseUp(e) {
    let coords = this.getCoords(e);
    this.dragging = false;

    if (!this.getTool().up(coords)) {
      return;
    }

    this.history.record({
      action: 'up',
      color: this.ctx.strokeStyle,
      toolName: this.toolName,
      width: this.ctx.lineWidth,
      x: coords.x,
      y: coords.y
    });
  }

  onMouseLeave(e) {
    let coords = this.getCoords(e);
    this.dragging = false;

    if (!this.getTool().leave(coords)) {
      return;
    }

    this.history.record({
      action: 'leave',
      color: this.ctx.strokeStyle,
      toolName: this.toolName,
      width: this.ctx.lineWidth,
      x: coords.x,
      y: coords.y
    });
  }

  undo() {
    this.history.undo();
    this.render();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.stagingCtx.clearRect(0, 0, this.stagingCtx.canvas.width, this.stagingCtx.canvas.height);
  }

  render() {
    this.clear();

    for (let event of this.history) {
      this.ctx.lineWidth = event.width;
      this.ctx.strokeStyle = event.color;
      this.tools[event.toolName][event.action](event);
    }
  }
}

export default Draw;
