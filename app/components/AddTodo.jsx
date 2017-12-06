import React, { Component } from 'react';

class AddTodo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const todoText = this.refs.todoText.value;
    if (todoText.length) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    }
  }

  componentDidMount() {
    this.refs.todoText.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;