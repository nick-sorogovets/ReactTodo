import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';


class TodoApp extends Component {
  state = {
    showCompleted: false,
    searchText: '',
    todos: [
      {
        id: uuid(),
        text: 'Walk the dog'
      },
      {
        id: uuid(),
        text: 'Crean the yard'
      },
      {
        id: uuid(),
        text: 'Learn React/Redux'
      },
      {
        id: uuid(),
        text: 'Be healthy'
      }
    ]
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    });
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase(),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo app</h1>
        <TodoSeach onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
