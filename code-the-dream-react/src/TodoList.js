import React from 'react';
import { TodoListItem } from './TodoListItem';

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

function TodoList(props) {
    return (
      <ul>
        {props.todoList.map((listItem) => (
          <TodoListItem key={listItem.objectID} listItem={listItem} />
        ))}
      </ul>
    );
}

export { TodoList }