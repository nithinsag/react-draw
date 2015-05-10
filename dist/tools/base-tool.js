"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = (function () {
  function Tool(ctx) {
    _classCallCheck(this, Tool);

    this.ctx = ctx;
  }

  _createClass(Tool, [{
    key: "down",
    value: function down(_ref) {
      var x = _ref.x;
      var y = _ref.y;

      return false;
    }
  }, {
    key: "move",
    value: function move(_ref2) {
      var x = _ref2.x;
      var y = _ref2.y;

      return false;
    }
  }, {
    key: "up",
    value: function up(_ref3) {
      var x = _ref3.x;
      var y = _ref3.y;

      return false;
    }
  }, {
    key: "leave",
    value: function leave(_ref4) {
      var x = _ref4.x;
      var y = _ref4.y;

      return false;
    }
  }]);

  return Tool;
})();

// Clear parts of the canvas under the cursor

var EraserTool = (function (_Tool) {
  function EraserTool() {
    _classCallCheck(this, EraserTool);

    if (_Tool != null) {
      _Tool.apply(this, arguments);
    }
  }

  _inherits(EraserTool, _Tool);

  return EraserTool;
})(Tool);

// Stamp shapes onto the canvas

var BrushTool = (function (_Tool2) {
  function BrushTool() {
    _classCallCheck(this, BrushTool);

    if (_Tool2 != null) {
      _Tool2.apply(this, arguments);
    }
  }

  _inherits(BrushTool, _Tool2);

  return BrushTool;
})(Tool);

// Paste images onto the canvas

var StampTool = (function (_Tool3) {
  function StampTool() {
    _classCallCheck(this, StampTool);

    if (_Tool3 != null) {
      _Tool3.apply(this, arguments);
    }
  }

  _inherits(StampTool, _Tool3);

  return StampTool;
})(Tool);

// Draw letters onto the canvas

var LetterTool = (function (_Tool4) {
  function LetterTool() {
    _classCallCheck(this, LetterTool);

    if (_Tool4 != null) {
      _Tool4.apply(this, arguments);
    }
  }

  _inherits(LetterTool, _Tool4);

  return LetterTool;
})(Tool);

exports["default"] = Tool;
module.exports = exports["default"];