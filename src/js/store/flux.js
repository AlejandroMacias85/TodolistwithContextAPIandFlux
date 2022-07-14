const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isLoggedIn: false,
      todos: ["Make the bed", "Walk the dog"],
      
    },
    actions: {
      login: function () {
        setStore({ isLoggedIn: true });
      },
      logout: function () {
        setStore({ isLoggedIn: false });
      },
      addTask: (task, i) => {
				const store = getStore();
        store.todos.push(task)
        return (
          store.todos
          )
			}, 
			deleteTask: function(task) {
				const store = getStore();
				function deleteTodo(t) {
					return t != task
				}
				const filteredList = store.todos.filter(deleteTodo)
        console.log('filteredList', filteredList)
				store.todos = filteredList
        console.log('store.todos', store.todos)
				return (filteredList)
        
			},
    },
  };
};

export default getState;
