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

var _Tool2 = require('./base-tool');

var _Tool3 = _interopRequireDefault(_Tool2);

var _pixelAt$splitColor$equalColors$updatePixel = require('../utils');

var FillTool = (function (_Tool) {
  function FillTool(ctx) {
    _classCallCheck(this, FillTool);

    _get(Object.getPrototypeOf(FillTool.prototype), 'constructor', this).call(this);
    this.ctx = ctx;
  }

  _inherits(FillTool, _Tool);

  _createClass(FillTool, [{
    key: 'down',
    value: function down(_ref) {
      var x = _ref.x;
      var y = _ref.y;

      var img = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      var newColor = _pixelAt$splitColor$equalColors$updatePixel.splitColor(this.ctx.strokeStyle);

      var pixels = [{ x: x, y: y }];
      var targetColor = _pixelAt$splitColor$equalColors$updatePixel.pixelAt(img, x, y);

      var maxX = img.width - 1;
      var maxY = img.height - 1;

      while (pixels.length) {
        var pixel = pixels.pop();
        var pixelColor = _pixelAt$splitColor$equalColors$updatePixel.pixelAt(img, pixel.x, pixel.y);
        if (_pixelAt$splitColor$equalColors$updatePixel.equalColors(targetColor, newColor)) {
          continue;
        }
        if (!_pixelAt$splitColor$equalColors$updatePixel.equalColors(pixelColor, targetColor)) {
          continue;
        }

        _pixelAt$splitColor$equalColors$updatePixel.updatePixel(img, pixel.x, pixel.y, newColor);

        if (pixel.x > 0) {
          pixels.push({ x: pixel.x - 1, y: pixel.y });
        }
        if (pixel.x < maxX) {
          pixels.push({ x: pixel.x + 1, y: pixel.y });
        }
        if (pixel.y > 0) {
          pixels.push({ x: pixel.x, y: pixel.y - 1 });
        }
        if (pixel.y < maxY) {
          pixels.push({ x: pixel.x, y: pixel.y + 1 });
        }
      }

      this.ctx.putImageData(img, 0, 0);

      return true;
    }
  }]);

  return FillTool;
})(_Tool3['default']);

exports['default'] = FillTool;
module.exports = exports['default'];