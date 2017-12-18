import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
// Load foundation
$(document).foundation();

import actions from 'actions';
import { configure } from 'configureStore';
const store = configure();

store.subscribe(() => {
  const state = store.getState();
  console.log('New state', store.getState());

  TodoAPI.setTodos(state.todos);
});

const initalTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initalTodos));
 
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);;
