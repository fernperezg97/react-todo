import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        document.getElementById("formValue").reset();
        props.onAddTodo(todoTitle);   /* I am not 100% sure if this is where I was expected to add the onAddTodo callback prop within the handleAddTodo function */                 
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