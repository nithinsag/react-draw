'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Tool2 = require('./base-tool');

var _Tool3 = _interopRequireDefault(_Tool2);

var LineTool = (function (_Tool) {
  function LineTool() {
    _classCallCheck(this, LineTool);

    if (_Tool != null) {
      _Tool.apply(this, arguments);
    }
  }

  _inherits(LineTool, _Tool);

  _createClass(LineTool, [{
    key: 'down',
    value: function down(_ref) {
      var x = _ref.x;
      var y = _ref.y;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      return true;
    }
  }, {
    key: 'up',
    value: function up(_ref2) {
      var x = _ref2.x;
      var y = _ref2.y;

      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      return true;
    }
  }, {
    key: 'leave',
    value: function leave() {
      this.ctx.closePath();
      return false;
    }
  }]);

  return LineTool;
})(_Tool3['default']);

exports['default'] = LineTool;
module.exports = exports['default'];