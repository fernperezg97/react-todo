import React from 'react';

function TodoListItem(props) {
    return (
        <li>{props.propsTodoListChunk.title}</li>
    );
}

export { TodoListItem }