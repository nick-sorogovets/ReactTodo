const redux = require('redux');

import uuid from 'node-uuid';
import moment from 'moment';
console.log('Starting todo redux example');


// Search reducers and action generators
const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

const changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  };
}

// Todo reducers and action generators
let todoId = 1;
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: todoId++,
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state;
  }
}

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

const reducer = redux.combineReducers({
  searchText: searchReducer,
  todos: todosReducer,
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
  console.log('State', state);
});
// unsubscribe();

console.log('currentState', store.getState());

store.dispatch(changeSearchText('work'));

store.dispatch(addTodo('Test add todo'))

store.dispatch(addTodo('Test one more todo'));

store.dispatch(changeSearchText('dog'));

store.dispatch(changeSearchText('Something else'));

store.dispatch(removeTodo(1));
