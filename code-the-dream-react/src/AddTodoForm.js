import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        document.getElementById("formValue").reset(); // Note to self: can also use event.target.value instead of document.getElementById()
        props.onAddTodo(todoTitle);                 
    };
    return (
        <form id="formValue" onSubmit={handleAddTodo}>
            <label>Title </label>
            <input id="todoTitle" type="text" name="title"></input>
            <label htmlFor="todoTitle"></label>
            <input type="submit" value="Add"/>
        </form>
    );
}

export { AddTodoForm }