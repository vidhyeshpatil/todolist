import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

export default function ToDoList({ todoList }) {
    return (
        <div className = "todo-list">
            {todoList && todoList.map((item, index) => (
                <ToDoItem key = {index} item = {item} itemIndex = {index} />
            ))}
        </div>
    );
}

ToDoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
        })
    )
}
