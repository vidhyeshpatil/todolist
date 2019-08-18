import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function HomePage({ history, todoList, resetLoginStatus }) {
    const { isToDoFormRender, showToDoForm, hideToDoForm } = useToDoForm(false);

    function setToLogin() {

        // logout & reset the status
        resetLoginStatus();

        // route to login screen
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
    )
}

function mapStateToProps(state) {
    return {
        todoList: state.todoReducer.todoList,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ resetLoginStatus }, dispatch);
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage)

// props validation
Home.propTypes = {
    history: PropTypes.object,
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
        })
    ),
    resetLoginStatus: PropTypes.func
}

export default Home;
