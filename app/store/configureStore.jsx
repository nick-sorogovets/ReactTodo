const redux = require('redux');
import thunk from 'redux-thunk';

import { searchReducer, todosReducer, mapReducer} from '../reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
    searchText: searchReducer,
    todos: todosReducer,
    map: mapReducer,
  })
  
  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
