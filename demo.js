require('babel/polyfill');

let React = require('react');
let Draw = require('./lib/react-draw');

let App = React.createClass({
  getInitialState() {
    return {
      tool: 'pencil',
      width: 1
    };
  },

  onToolSelect(e) {
    this.setState({
      tool: e.target.value
    });
  },

  onUndoClick(e) {
    this.refs.draw.undo();
  },

  onWidthChange(e) {
    this.setState({
      width: e.target.value
    });
  },

  render: function () {
    return (
      <div>
        <h1>react-draw</h1>
        <div>
          <Draw ref='draw' tool={this.state.tool} width={this.state.width} />
          <div>
            <button onClick={this.onUndoClick}>undo</button>
            <select onChange={this.onToolSelect} defaultValue={this.state.tool}>
              <option value='pencil'>pencil</option>
              <option value='fill'>fill</option>
              <option value='line'>line</option>
              <option value='circle'>circle</option>
              <option value='rect'>rect</option>
            </select>
            <input onChange={this.onWidthChange} type='range' min='1' max='50' value={this.state.width} />
            <input onChange={this.onWidthChange} type='number' min='1' max='50' value={this.state.width} />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.body);
