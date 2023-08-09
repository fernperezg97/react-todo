import { useEffect } from 'react';
import { useState } from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {    // What's the difference (if any) between initiating an async function the way I did it vs const fetchData = async() =>
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    const options = {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    };
    console.log(options.headers.Authorization, url)
    try {
      const response = await fetch(url, options);
      console.log(response);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      // console.log(data);
      const todos = data.records.map((todo) => {
        const newApiTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        // console.log(todos);
        return newApiTodo
      });
        setTodoList(todos);
        setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
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