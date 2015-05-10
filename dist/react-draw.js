'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Draw = require('./draw');

var Draw = _React2['default'].createClass({
  displayName: 'Draw',

  getDefaultProps: function getDefaultProps() {
    return {
      tool: 'pencil',
      style: {
        border: '1px solid #ddd',
        cursor: 'crosshair',
        height: 400,
        width: 600
      }
    };
  },

  propTypes: {
    style: _React2['default'].PropTypes.object
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (this.props.tool !== nextProps.tool) {
      this.draw.setTool(nextProps.tool);
    }
  },

  componentDidMount: function componentDidMount() {
    var canvas = _React2['default'].findDOMNode(this.refs.canvas);
    var draw = this.draw = new _Draw(canvas, this.props);
  },

  undo: function undo() {
    this.draw && this.draw.undo();
  },

  render: function render() {
    return _React2['default'].createElement('canvas', {
      ref: 'canvas',
      height: this.props.style.height,
      width: this.props.style.width,
      style: this.props.style
    });
  } });

exports['default'] = Draw;
module.exports = exports['default'];