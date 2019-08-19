import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateToDoList } from '../../redux/actions';
import PropTypes from 'prop-types';

export default function ToDoForm({ hideToDoForm }) {

    // dispatch hook - approx. equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    // memoize with callback to avoid unnecessary render, due to change reference
    const saveToDo = useCallback(
        saveToDoNote,
        [dispatch]
    );

    function saveToDoNote(e) {
        e.preventDefault();

        const title = e.target.todoTitle.value;
        const body = e.target.todoBody.value;

        // checks for the value present in title & body
        if (title.length > 1 && body.length > 1) {
            
            // dispatch an action to update the data in reducer
            dispatch(updateToDoList({title, body}));

            // hide todo form once note is added to todo list
            hideToDoForm();
        }
    }

    return (
        <form onSubmit = {saveToDo} >
            <div className = "todo-wrapper">
                <label>Title: </label>
                <input 
                    type = "text"
                    name = "todoTitle"
                    className = "todo-input"
                />
                <label>Body: </label>
                <textarea 
                    id = "todoTextArea"
                    name = "todoBody"
                    className = "todo-input"
                />
                <div className = "save-note-parent">
                    <button type = "submit">Save</button>
                </div>
            </div>
        </form>
    );
}

// props validation
ToDoForm.propTypes = {
    hideToDoForm: PropTypes.func,
}
