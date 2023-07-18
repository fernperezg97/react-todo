import React from 'react';

function InputWithLabel(props) {
    return (
        <>
            <label>{props.children} </label>
            <input id="todoTitle" type="text" name="title" value={props.todoTitle} onChange={props.handleTitleChange} autoFocus ></input>
            <input type="submit" value="Add"/>
        </>
    )
}

export { InputWithLabel }