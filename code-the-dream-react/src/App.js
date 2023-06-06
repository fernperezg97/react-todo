import * as React from 'react';
import { TodoList } from './TodoList.js';
import { AddTodoForm } from './AddTodoForm.js';

function App() {
  return (
    <div>
      <h1>Lesson 1.2: Todo List & Add Todo Form</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

// function Search() {
//   return (
//     <div>
//       <label htmlfor="search">Search: </label>
//       <input id="search" type="text" />
//     </div>
//   );
// }

// function expression format
// let List = function App() {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       {/* invoking search by creating a 'search element' */}
//       <Search />
//       {/* invoking list componnent below */}
//       <List /> 
//     </div>
//   );
// }

// ARROW function expression format
// let List = () => {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       {/* invoking search by creating a 'search element' */}
//       <Search />
//       {/* invoking list componnent below */}
//       <List /> 
//     </div>
//   );
// }

export default App;