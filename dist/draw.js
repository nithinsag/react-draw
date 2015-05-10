'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Base2 = require('./utils');

var _History = require('./history');

var _History2 = _interopRequireDefault(_History);

var _PencilTool$LineTool$CircleTool$RectTool$FillTool = require('./tools');

var Draw = (function (_Base) {
  function Draw(canvas, options) {
    _classCallCheck(this, Draw);

    _get(Object.getPrototypeOf(Draw.prototype), 'constructor', this).call(this);

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
      pencil: new _PencilTool$LineTool$CircleTool$RectTool$FillTool.PencilTool(this.ctx),
      fill: new _PencilTool$LineTool$CircleTool$RectTool$FillTool.FillTool(this.ctx),
      line: new _PencilTool$LineTool$CircleTool$RectTool$FillTool.LineTool(this.ctx),
      circle: new _PencilTool$LineTool$CircleTool$RectTool$FillTool.CircleTool(this.ctx),
      rect: new _PencilTool$LineTool$CircleTool$RectTool$FillTool.RectTool(this.ctx)
    };
    this.toolName = options.toolName || 'pencil';

    this.history = new _History2['default']();

    this.dragging = false;
  }

  _inherits(Draw, _Base);

  _createClass(Draw, [{
    key: 'getCoords',
    value: function getCoords(e) {
      return {
        x: e.x - this.canvas.offsetLeft,
        y: e.y - this.canvas.offsetTop
      };
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      this.ctx.strokeStyle = color;
    }
  }, {
    key: 'getTool',
    value: function getTool() {
      return this.tools[this.toolName];
    }
  }, {
    key: 'setTool',
    value: function setTool(toolName) {
      this.toolName = toolName;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(e) {
      var coords = this.getCoords(e);
      this.dragging = true;

      if (!this.getTool().down(coords)) {
        return;
      }

      this.history.push({
        action: 'down',
        toolName: this.toolName,
        x: coords.x,
        y: coords.y
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      if (!this.dragging) {
        return;
      }
      var coords = this.getCoords(e);

      if (!this.getTool().move(coords)) {
        return;
      }

      this.history.push({
        action: 'move',
        toolName: this.toolName,
        x: coords.x,
        y: coords.y
      });
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var coords = this.getCoords(e);
      this.dragging = false;

      if (!this.getTool().up(coords)) {
        return;
      }

      this.history.push({
        action: 'up',
        toolName: this.toolName,
        x: coords.x,
        y: coords.y
      });
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave(e) {
      var coords = this.getCoords(e);
      this.dragging = false;

      if (!this.getTool().leave(coords)) {
        return;
      }

      this.history.push({
        action: 'leave',
        toolName: this.toolName,
        x: coords.x,
        y: coords.y
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.history.undo();
      this.render();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }, {
    key: 'render',
    value: function render() {
      this.clear();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.history[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _event = _step.value;

          this.tools[_event.toolName][_event.action](_event);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Draw;
})(_Base2.Base);

exports['default'] = Draw;
module.exports = exports['default'];