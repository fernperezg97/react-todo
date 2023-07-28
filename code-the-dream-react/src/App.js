import { useEffect } from 'react';
import { useState } from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data only once when the component mounts
    const fetchData = new Promise((resolve, reject) => {
      // Simulate 2-second delay to resolve the Promise
      setTimeout(() => {
        resolve({ data: { todoList: [] } });
      }, 2000);
    });

    // Use .then() to update the todoList state with the resolved data
    fetchData
      .then((result) => {
        const updatedTodoList = result.data.todoList;
        setTodoList(updatedTodoList);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array to fetch data only once

  useEffect(() => {
    // Called whenever todoList state changes. Saves data to localStorage whenever todoList is updated.
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); // The effect will run whenever any of the dependencies in the array change.

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
      <AddTodoForm onAddTodo={addTodo} />
      {/* Render 'Loading...' message only when isLoading is true or todoList is empty, otherwise render TodoList component */}
      {isLoading || todoList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;