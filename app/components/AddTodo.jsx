import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from 'actions';

export class AddTodo extends Component {
  handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    const todoText = this.refs.todoText.value;
    if (todoText.length) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    }
  }

  componentDidMount() {
    this.refs.todoText.focus();
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);