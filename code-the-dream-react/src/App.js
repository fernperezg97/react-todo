import * as React from 'react';
import { useEffect } from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';

function App() {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = localStorage.getItem('savedTodoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect (() => {
    // Check if the todoList is empty (data not fetched yet)
    if (isLoading === false) {
      const fetchData = new Promise((resolve, reject) => {
        // Simulate 2-second delay to resolve the Promise
        setTimeout(() => {
          resolve({data: { todoList: [] } });
        }, 2000);
      });

      // Use .then() to update the todoList state with the resolved data
      fetchData.then((result) => {
        const updatedTodoList = result.data.todoList;
        setTodoList(updatedTodoList);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  } else {
    // If todoList is not empty, save data to localStorage
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  };

  function removeTodo(id) {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  };
  
  return (
      <>
        <h1>React Assignment: Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} /> {/* When initializing a component, if your component (function) takes in props, that is your key to know that your component--AddTodoForm in this case--takes something in and you need to add props after calling and creating an instance of the component. */}
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </>
  );
}

export default App;