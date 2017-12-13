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
      const badTodos = { a: 'test' };

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

  describe('filterTodos', () => {
    const todos = [{
      id: 1,
      text: 'Some test 1',
      completed: true,
    },
    {
      id: 2,
      text: 'Some test 2',
      completed: false,
    },
    {
      id: 3,
      text: 'Fake test 2',
      completed: true,
    }];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos= TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return 1 non completed items if showCompleted is false', () => {
      const filteredTodos= TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
      expect(filteredTodos[0].id).toBe(2);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter by search text', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

      expect(filteredTodos.length).toBe(2);
    });

    it('should show all search test empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
  });
});