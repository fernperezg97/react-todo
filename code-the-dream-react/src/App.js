import * as React from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div>
      <h1>React Assignment: Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
        <p>
          New todo item: <strong>{newTodo}</strong> 
        </p>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;