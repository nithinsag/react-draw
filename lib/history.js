class History {
  constructor(opts={}) {
    this.events = opts.history || [];
    this.position;
  }

  * [Symbol.iterator]() {
    for (let event of this.events) {
      yield event;
    }
  }

  push(event) {
    this.events.push(event);
  }

  redo() {
  }

  step() {
  }

  undo() {
    let finished = false;
    while (!finished) {
      event = this.events.pop()
      finished = !event || event && event.action === 'down';
    }
  }
}

export default History;
