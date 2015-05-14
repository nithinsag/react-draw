require('babel/polyfill');

let React = require('react');
let Draw = require('./components/react-draw');

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
            <div className='controls'>
              <button onClick={this.onUndoClick}>undo</button>
            </div>
            <div className='controls'>
              <button onClick={this.onToolSelect} value='pencil'>pencil</button>
              <button onClick={this.onToolSelect} value='fill'>fill</button>
              <button onClick={this.onToolSelect} value='line'>line</button>
              <button onClick={this.onToolSelect} value='circle'>circle</button>
              <button onClick={this.onToolSelect} value='rect'>rect</button>
            </div>
            <input onChange={this.onWidthChange} type='range' min='1' max='50' value={this.state.width} />
            <input onChange={this.onWidthChange} type='number' min='1' max='50' value={this.state.width} />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.body);
