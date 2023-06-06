import React from 'react';

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

function TodoList() {
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

export { TodoList }