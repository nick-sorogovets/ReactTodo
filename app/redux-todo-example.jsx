const redux = require('redux');

import uuid from 'node-uuid';
import moment from 'moment';
import axios from 'axios';

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

// Map reducers and action generators

const mapReducer = ( state = { isFething: false, url: undefined }, action) => {
  switch(action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFething: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH': 
      return {
        isFething: false,
        url: action.url
      };
    default:
      return state; 
  }
}

const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
}

const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
}

const fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then((response) => {
    const loc = response.data.loc;
    const baseUrl = `http://maps.google.com?q=${loc}`;

    store.dispatch(completeLocationFetch(baseUrl));
  })
}

const reducer = redux.combineReducers({
  searchText: searchReducer,
  todos: todosReducer,
  map: mapReducer,
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
  console.log('State', state);

  if(state.map.isFething) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = `<a target="_blank" href="${state.map.url}">View Your location</a>`;
  }
});
// unsubscribe();

console.log('currentState', store.getState());

fetchLocation();

store.dispatch(changeSearchText('work'));

store.dispatch(addTodo('Test add todo'))

store.dispatch(addTodo('Test one more todo'));

store.dispatch(changeSearchText('dog'));

store.dispatch(changeSearchText('Something else'));

store.dispatch(removeTodo(1));
