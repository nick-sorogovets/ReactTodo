const redux = require('redux');


console.log('Starting todo redux example');

const actions = require('./actions');
import { configure } from './store/configureStore';

const store = configure();

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

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeSearchText('work'));

store.dispatch(actions.addTodo('Test add todo'))

store.dispatch(actions.addTodo('Test one more todo'));

store.dispatch(actions.changeSearchText('dog'));

store.dispatch(actions.changeSearchText('Something else'));

store.dispatch(actions.removeTodo(1));
