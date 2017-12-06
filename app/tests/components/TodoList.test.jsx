import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exists', () => {
    expect(TodoList).toExist();
  });

  it('should render on Todo component from each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something'
      }, {
        id: 2,
        text: 'Check tests'

      }
    ];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);
  });
});