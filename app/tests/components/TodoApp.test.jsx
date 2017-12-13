import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'Test text';

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [],
    });
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
    }

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    // call handgleToggle with 11
    // Verify that value changed

    expect(todoApp.state.todos[0].completed).toBe(false);
    
    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(true);
  })
});