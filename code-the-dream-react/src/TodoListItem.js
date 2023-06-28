import React from 'react';

function TodoListItem(props) {
    return (
        <li>{props.listItem.title}</li>
    );
}

export { TodoListItem }