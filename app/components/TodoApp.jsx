import React, { Component } from 'react';

import TodoList from 'TodoList';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Crean the yard'
      },
      {
        id: 3,
        text: 'Learn React/Redux'
      },
      {
        id: 4,
        text: 'Be healthy'
      }
    ]
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo app</h1>
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default TodoApp;
