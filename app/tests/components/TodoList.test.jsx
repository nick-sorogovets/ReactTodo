import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';
import { Provider } from 'react-redux';

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
  it('should exists', () => {
    expect(TodoList).toExist();
  });

  it('should render on Todo component from each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500,
      }, {
        id: 2,
        text: 'Check tests',
        completed: false,
        completedAt: undefined,
        createdAt: 500,
      }
    ];

    const store = configure({
      todos
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    
    expect(todoComponents.length).toBe(todos.length);
  });

  it('should render emtpy message if no todos', () => {
    const todos = [];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});