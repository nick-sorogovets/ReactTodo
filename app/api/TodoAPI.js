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
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => !todo.completed  || showCompleted);
    
    if(searchText.length) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    }

    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
      return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }

    })

    return filteredTodos;
  },
};
