import * as React from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';
 
function App() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    console.log(todoList);
    console.log(newTodo)
    setTodoList([...todoList, newTodo]);
  }
  
  return (
    <div>
      <h1>React Assignment: Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} /> {/* When initializing a component, if your component (function) takes in props, that is your key to know that your component--AddTodoForm in this case--takes something in and you need to add props after calling and creating an instance of the component. */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;