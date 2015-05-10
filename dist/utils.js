"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.pixelAt = pixelAt;
exports.splitColor = splitColor;
exports.equalColors = equalColors;
exports.updatePixel = updatePixel;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = (function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: "bind",
    value: function bind(self) {
      for (var _len = arguments.length, methods = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        methods[_key - 1] = arguments[_key];
      }

      methods.forEach(function (method) {
        return self[method] = self[method].bind(self);
      });
    }
  }]);

  return Base;
})();

exports.Base = Base;

function pixelAt(img, x, y) {
  var i = (y * img.width + x) * 4;

  return [img.data[i], img.data[i + 1], img.data[i + 2], img.data[i + 3]];
}

function splitColor(color) {
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);
  var a = parseInt(color.slice(7, 9), 16) || 255;

  return [r, g, b, a];
}

function equalColors(colorA, colorB) {
  if (colorA.length !== colorB.length) {
    return false;
  }

  for (var i = 0; i < colorA.length; i++) {
    if (colorA[i] !== colorB[i]) {
      return false;
    }
  }

  return true;
}

function updatePixel(img, x, y, newColor) {
  var i = (y * img.width + x) * 4;

  img.data[i] = newColor[0];
  img.data[i + 1] = newColor[1];
  img.data[i + 2] = newColor[2];
  img.data[i + 3] = newColor[3];
}