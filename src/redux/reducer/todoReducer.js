import { UPDATE_TODO_LIST, REMOVE_TODO_ITEM } from "../actions/actionTypes";

const initialState = {
    todoList: [],
};

const todoReducer = function(state = initialState, {type, payload}) {
    switch(type) {
        case UPDATE_TODO_LIST:
            
            // adds the todo item to the todoList
            state.todoList.unshift(payload);

            return {
                ...state,
            };
        case REMOVE_TODO_ITEM:

            // remove the current item from the list
            const todoList = state.todoList.filter((item, index) => index !== payload);
            
            return {
                ...state,
                todoList,
            };
        default:
            return state;

    }
};

export default todoReducer;