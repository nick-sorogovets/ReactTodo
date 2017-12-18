import moment from 'moment';

// Search reducers and action generators
export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

// Todo reducers and action generators
let todoId = 1;
export const todosReducer = (state = [], action) => {
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

// Map reducers and action generators

export const mapReducer = ( state = { isFething: false, url: undefined }, action) => {
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