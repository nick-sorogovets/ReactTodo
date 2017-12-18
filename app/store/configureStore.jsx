const redux = require('redux');
import thunk from 'redux-thunk';

import {
  searchTextReducer,
  showCompletedReducer,
  todoReducer,
  } from 'reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer,
  });
  
  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
