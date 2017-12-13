export default {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }    
  },
  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];
    
    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      console.error('Error load todos from localStorage', error);
    }

    return Array.isArray(todos) ? todos : [];
  }
};
