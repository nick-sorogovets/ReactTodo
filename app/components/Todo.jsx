import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { text, id } = this.props;
    return (
      <div>
        <strong>{id}</strong>. {text}
      </div>
    );
  }
}

export default Todo;