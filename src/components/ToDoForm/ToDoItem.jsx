import React, {useCallback} from 'react';
import { useDispatch } from "react-redux";
import { removeToDoItem } from "../../redux/actions";
import PropTypes from 'prop-types';

export default function ToDoItem({item, itemIndex}) {

    // dispatch hook - approx. equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    // memoize with callback to avoid unnecessary render, due to change reference
    const removeToDoListItem = useCallback(
        removeItem,
        [dispatch]
    );

    function removeItem() {

        // dispatching an action remove todo item from the list
        dispatch(removeToDoItem(itemIndex));
    }

    return (
        <div className = "todo-list-wrapper">
            <div className = "todo-list-content">
                <div className = "todo-list-title">{item.title}</div>
                <div className = "todo-list-body">{item.body}</div>
            </div>
            <button className = "close-btn" onClick = {removeToDoListItem} />
        </div> 
    );
} 

// props validation
ToDoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    }),
    itemIndex: PropTypes.number,
}
