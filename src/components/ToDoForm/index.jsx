import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateToDoList } from '../../redux/actions';
import PropTypes from 'prop-types';

function ToDoForm({updateToDoList, hideToDoForm}) {

    function saveToDo(e) {
        e.preventDefault();

        const title = e.target.todoTitle.value;
        const body = e.target.todoBody.value;

        // checks for the value present in title & body
        if (title.length > 1 && body.length > 1) {
            
            // dispatch an action to update the data in reducer
            updateToDoList({title, body});

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
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateToDoList }, dispatch);
}

const Form = connect(null, mapDispatchToProps)(ToDoForm)

// props validation
Form.propTypes = {
    hideToDoForm: PropTypes.func,
    updateToDoList: PropTypes.func,
}

export default Form;