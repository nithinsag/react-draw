let Immutable = require('immutable');
let {EventEmitter} = require('events');
let CHANGE_EVENT = 'CHANGE';

class History extends EventEmitter {
  constructor(history=[]) {
    super();

    this.state = Immutable.List.of(...history);

    this.undoIdx = 0;
    this.undoStack = [];

  }

  * [Symbol.iterator]() {
    for (let event of this.state) {
      yield event;
    }
  }

  getState() {
    return this.state.toJS();
  }

  record(action) {
    this.undoStack.slice(0, this.undoStack.length - this.undoIdx);
    this.undoIdx = 0;

    this.state = this.state.push(action);
    this.undoStack.push(this.state);
    this.emit(CHANGE_EVENT, this.state);
  }

  undo() {
    if (this.state.count() === 1) {
      return;
    }

    while (true) {
      if (this.state.count() === 1) {
        break;
      }
      this.undoIdx++;
      this.state = this.undoStack[this.undoStack.length - 1 - this.undoIdx];
      if (this.state.last().action === 'down') {
        break;
      }
    }

    this.emit(CHANGE_EVENT, this.state);
  }
}

export default History;
