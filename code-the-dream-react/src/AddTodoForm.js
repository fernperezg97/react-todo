import React from 'react';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState(''); // setTodoTitle in this case is sometimes called the function updater/callback handler

    function handleTitleChange(event) {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    function handleAddTodo(event) {
        event.preventDefault();
        let todoItem = {
            title: todoTitle,
            id: Date.now(),
            }
        onAddTodo(todoItem);
        setTodoTitle(''); // Note to self: can also use event.target.reset() instead of document.getElementById()                 
    };
    
    return (
        <form id="formValue" onSubmit={handleAddTodo}>
            <label>Title </label>
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange}></input>
            <input type="submit" value="Add"/>
        </form>
    );
}

export { AddTodoForm }