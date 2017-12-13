import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import { fail } from 'assert';

import TodoAPI from 'TodoAPI'

class TodoApp extends Component {
  state = {
    showCompleted: false,
    searchText: '',
    todos: TodoAPI.getTodos()
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1>Todo app</h1>
        <TodoSeach onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
