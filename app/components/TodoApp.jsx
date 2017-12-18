import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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
          createdAt: moment().unix(),
          completedAt: undefined,
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSeach onSearch={this.handleSearch} />
              <TodoList />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
