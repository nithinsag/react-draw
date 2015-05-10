import React from 'react';
let _Draw = require('./draw');

let Draw = React.createClass({
  displayName: 'Draw',

  getDefaultProps() {
    return {
      tool: 'pencil',
      width: 1,
      style: {
        border: '1px solid #ddd',
        cursor: 'crosshair',
        imageRendering: 'pixelated',
        height: 400,
        width: 600
      }
    };
  },

  propTypes: {
    style: React.PropTypes.object
  },

  componentWillUpdate(nextProps, nextState) {
    if (this.props.tool !== nextProps.tool) {
      this.draw.setTool(nextProps.tool);
    }
    if (this.props.width !== nextProps.width) {
      this.draw.setWidth(nextProps.width);
    }
  },

  componentDidMount() {
    let canvas = React.findDOMNode(this.refs.canvas);
    let draw = this.draw = new _Draw(canvas, this.props);
  },

  undo() {
    this.draw && this.draw.undo();
  },

  render() {
    return (
      <canvas
        ref='canvas'
        height={this.props.style.height}
        width={this.props.style.width}
        style={this.props.style}
      />
    );
  },
});

export default Draw;
