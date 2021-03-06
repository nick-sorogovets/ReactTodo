import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) =>
        <Todo key={todo.id} {...todo } />);
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(TodoList);