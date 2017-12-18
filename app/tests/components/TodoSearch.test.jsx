import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Dog';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText,
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const spy = expect.createSpy();
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
