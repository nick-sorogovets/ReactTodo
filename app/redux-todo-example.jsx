const redux = require('redux');

import uuid from 'node-uuid';
import moment from 'moment';
console.log('Starting todo redux example');

let todoId = 1;

const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
const oldReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: todoId++,
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      }  
    default:
      return state;
  }
};

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

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

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'ADD_TODO',
  text: 'Test add todo'
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Test one more todo'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Something else'
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: 1
});
