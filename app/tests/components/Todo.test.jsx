import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { Todo } from 'Todo';

describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });

  it('it should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: 11,
      text: 'Test todo click',
      completed: true,
    }

    const spy = expect.createSpy();

    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
