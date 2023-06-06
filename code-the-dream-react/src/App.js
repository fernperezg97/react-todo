import * as React from 'react';
import { TodoList } from './TodoList.js';

function App() {
  return (
    <div>
      <h1>React</h1>
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