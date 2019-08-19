import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetLoginStatus } from '../../redux/actions';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoForm/ToDoList';
import PropTypes from 'prop-types';

// hook implementation
const useToDoForm = initialValue => {
    const [isToDoFormRender, displayToDoForm] = useState(initialValue);
    
    return {
        isToDoFormRender,
        showToDoForm: () => displayToDoForm(true),
        hideToDoForm: () => displayToDoForm(false),
    }
}

export default function HomePage({ history }) {
    const { isToDoFormRender, showToDoForm, hideToDoForm } = useToDoForm(false);

    // dispatch hook - approx. equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    // allow to extract data from the redux store state - approx. equivalent to mapStateToProps
    const { todoList } = useSelector(state => state.todoReducer);

    // memoize with callback to avoid unnecessary render, due to change reference
    const setToLogin = useCallback(
        logout,
        [dispatch]
    );

    function logout() {
        // action trigger
        dispatch(resetLoginStatus());

        // routes to login screen
        history.push("/login");
    }

    return (
        <div className = "home-container">
            <div className = "home-header">
                <div className = "title">My Notes</div>
                <button onClick = {setToLogin}>Logout</button>
            </div>
            <div className = "home-body">
                <div className = "todo-body-parent">
                    <div className = "add-note-parent">
                        <button className = "add-note-btn" onClick = {showToDoForm}>Add Note</button>
                    </div>
                    { isToDoFormRender && <ToDoForm hideToDoForm = {hideToDoForm} /> }
                </div>
                <ToDoList todoList = {todoList} />
            </div>
        </div>
    );
}

// props validation
HomePage.propTypes = {
    history: PropTypes.object,
}
