import React, { Component } from 'react';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';


class TodoApp extends Component {
  state = {
    showCompleted: false,
    searchText: '',
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

  handleAddTodo = (text) => {
    const todos = this.state.todos;
    todos.push({ id: todos.length + 2, text });
    this.setState({ todos });
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
        <TodoSeach onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

export default TodoApp;
