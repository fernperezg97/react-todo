import React from 'react';

function TodoListItem() {
    return (
        <ul>
        {todoList.map(item => <li number={item.objectID}>{item.title}</li>)}
    </ul>
    );
}

export { TodoListItem }