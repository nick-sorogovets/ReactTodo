import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exists', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should store data in localStorage after setTodos', () => {
      const todos = [{
        id: 1,
        text: 'Test all files',
        completed: false,
      }];

      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);      
    });

    it('should not set invalid todo array', () => {
      const badTodos = { a: 'test'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  })

  describe('getTodos', () => {
    it('should return empty array for bar localstorage data', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        id: 1,
        text: 'Test all files',
        completed: false,
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

});