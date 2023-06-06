import React from 'react';

function AddTodoForm() {
    return (
        <form>
            <label>Title </label>
            <input id="todoTitle" type="text"></input> {/* Question: Do you always include a type? It did not specify in the instructions. */}
            <label htmlfor="todoTitle"></label>
            <input type="submit" value="Add"/>
        </form>
    );
}

export { AddTodoForm }