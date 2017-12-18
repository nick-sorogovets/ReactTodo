import uuid from 'node-uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined,
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const completed = !todo.completed;
          return {
            ...todo,
            completed,
            completedAt: completed ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}