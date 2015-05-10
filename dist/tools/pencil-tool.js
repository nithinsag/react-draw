'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Tool2 = require('./base-tool.js');

var _Tool3 = _interopRequireDefault(_Tool2);

var PencilTool = (function (_Tool) {
  function PencilTool() {
    _classCallCheck(this, PencilTool);

    if (_Tool != null) {
      _Tool.apply(this, arguments);
    }
  }

  _inherits(PencilTool, _Tool);

  _createClass(PencilTool, [{
    key: 'down',
    value: function down(_ref) {
      var x = _ref.x;
      var y = _ref.y;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      return true;
    }
  }, {
    key: 'move',
    value: function move(_ref2) {
      var x = _ref2.x;
      var y = _ref2.y;

      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      return true;
    }
  }, {
    key: 'up',
    value: function up() {
      this.ctx.closePath();
      return false;
    }
  }, {
    key: 'leave',
    value: function leave() {
      this.ctx.closePath();
      return false;
    }
  }]);

  return PencilTool;
})(_Tool3['default']);

exports['default'] = PencilTool;
module.exports = exports['default'];