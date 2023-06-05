import * as React from 'react';

const todoList = [
  {
    objectID: '1',
    title: 'Complete Assignment',
  },
  {
    objectID: '2',
    title: 'Take Dog on Walk',
  },
  {
    objectID: '3',
    title: 'Wash Dishes',
  }
];

function List() {
  return (
    <ul>
      {todoList.map(function (item) {
          return (
          <li key={item.objectID}> {item.title}</li>
          )
        })

      }
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlfor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

// function expression format
let List = function App() {
  return (
    <div>
      <h1>Todo List</h1>
      {/* invoking search by creating a 'search element' */}
      <Search />
      {/* invoking list componnent below */}
      <List /> 
    </div>
  );
}

// ARROW function expression format
let List = () => {
  return (
    <div>
      <h1>Todo List</h1>
      {/* invoking search by creating a 'search element' */}
      <Search />
      {/* invoking list componnent below */}
      <List /> 
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      {/* invoking search by creating a 'search element' */}
      <Search />
      {/* invoking list componnent below */}
      <List /> 
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      {/* invoking search by creating a 'search element' */}
      <Search />
      {/* invoking list componnent below */}
      <List /> 
    </div>
  );
}

export default App;