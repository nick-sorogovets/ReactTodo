import expect from 'expect';
const actions = require('actions');

describe('Actions', () => {
  it('Should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };
    const result = actions.setSearchText(action.searchText);

    expect(result).toEqual(action);
  });

  it('Should generate addTodo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Some todo'
    };

    const res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate addTodos action object', () => {
    const todos = [
      {
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 234000,
      }
    ];
    const action ={
      type: 'ADD_TODOS',
      todos,
    };

    const res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('Should generate showCompleted action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
})