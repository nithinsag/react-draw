import {Base} from './utils';
import History from './history';
import {PencilTool, LineTool, CircleTool, RectTool, FillTool} from './tools';

class Draw extends Base {
  constructor(canvas, options) {
    super()

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.ctx.lineWidth = options.lineWidth;
    this.ctx.strokeStyle = options.strokeStyle;

    this.bind(this, 'getTool', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onMouseLeave', 'render');

    canvas.addEventListener('mousedown', this.onMouseDown);
    canvas.addEventListener('mousemove', this.onMouseMove);
    canvas.addEventListener('mouseup', this.onMouseUp);
    canvas.addEventListener('mouseleave', this.onMouseLeave);

    this.tools = {
      pencil: new PencilTool(this.ctx),
      fill: new FillTool(this.ctx),
      line: new LineTool(this.ctx),
      circle: new CircleTool(this.ctx),
      rect: new RectTool(this.ctx)
    };
    this.toolName = options.toolName || 'pencil';

    this.history = new History(options);

    this.dragging = false;
  }

  getCoords(e) {
    return {
      x: e.x - this.canvas.offsetLeft,
      y: e.y - this.canvas.offsetTop
    };
  }

  setColor(color) {
    this.ctx.strokeStyle = color;
  }

  setWidth(width) {
    this.ctx.lineWidth = width;
  }

  getTool() {
    return this.tools[this.toolName];
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

    this.history.push({
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

    this.history.push({
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

    this.history.push({
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

    this.history.push({
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
