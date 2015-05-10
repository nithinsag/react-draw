'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var History = (function () {
  function History() {
    var opts = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, History);

    this.events = opts.history || [];
    this.position;
  }

  _createClass(History, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function callee$1$0() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _event;

      return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            context$2$0.prev = 3;
            _iterator = this.events[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              context$2$0.next = 12;
              break;
            }

            _event = _step.value;
            context$2$0.next = 9;
            return _event;

          case 9:
            _iteratorNormalCompletion = true;
            context$2$0.next = 5;
            break;

          case 12:
            context$2$0.next = 18;
            break;

          case 14:
            context$2$0.prev = 14;
            context$2$0.t0 = context$2$0['catch'](3);
            _didIteratorError = true;
            _iteratorError = context$2$0.t0;

          case 18:
            context$2$0.prev = 18;
            context$2$0.prev = 19;

            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }

          case 21:
            context$2$0.prev = 21;

            if (!_didIteratorError) {
              context$2$0.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return context$2$0.finish(21);

          case 25:
            return context$2$0.finish(18);

          case 26:
          case 'end':
            return context$2$0.stop();
        }
      }, callee$1$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  }, {
    key: 'push',
    value: function push(event) {
      this.events.push(event);
    }
  }, {
    key: 'redo',
    value: function redo() {}
  }, {
    key: 'step',
    value: function step() {}
  }, {
    key: 'undo',
    value: function undo() {
      var finished = false;
      while (!finished) {
        event = this.events.pop();
        finished = !event || event && event.action === 'down';
      }
    }
  }]);

  return History;
})();

exports['default'] = History;
module.exports = exports['default'];