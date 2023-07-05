import React from 'react';
import { TodoListItem } from './TodoListItem';


function TodoList(props) {
    return (
      <ul>
        {props.todoList.map((listItem) => (
          <TodoListItem key={listItem.id} listItem={listItem} />
        ))}
      </ul>
    );
}

export { TodoList }