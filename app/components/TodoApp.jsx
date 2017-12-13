import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import { fail } from 'assert';


class TodoApp extends Component {
  state = {
    showCompleted: false,
    searchText: '',
    todos: [
      {
        id: uuid(),
        text: 'Walk the dog',
        completed: false,
      },
      {
        id: uuid(),
        text: 'Crean the yard',
        completed: true,
      },
      {
        id: uuid(),
        text: 'Learn React/Redux',
        completed: false,
      },
      {
        id: uuid(),
        text: 'Be healthy',
        completed: true,
      }
    ]
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
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

  handleToggle = (id) => {
    const todos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
   
    this.setState({ todos });
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo app</h1>
        <TodoSeach onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
