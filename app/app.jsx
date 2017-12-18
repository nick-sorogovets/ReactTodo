import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

import { default as actions } from 'actions';
import { configure } from 'configureStore';
const store = configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean the room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());
 
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);;
