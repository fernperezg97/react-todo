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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (
          <li key={item.objectID}> {item.title}</li>
          )
        })

        }
      </ul>
    </div>
  );
}

export default App;