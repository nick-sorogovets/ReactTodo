import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoSeach from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';


class TodoApp extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSeach/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
