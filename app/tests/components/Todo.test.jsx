import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import Todo from 'Todo';

describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id: 11,
      text: 'Test todo click',
      completed: true,
    }

    const spy = expect.createSpy();

    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(11);

    


  });
});
