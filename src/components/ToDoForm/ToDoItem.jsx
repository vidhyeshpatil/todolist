import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeToDoItem } from "../../redux/actions";
import PropTypes from 'prop-types';

function ToDoItem({item, itemIndex, removeToDoItem}) {

    function removeToDoListItem() {

        // dispatching an action remove todo item from the list
        removeToDoItem(itemIndex);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeToDoItem }, dispatch);
}

const Item = connect(null, mapDispatchToProps)(ToDoItem);

// props validation
Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    }),
    itemIndex: PropTypes.number,
    removeToDoItem: PropTypes.func
}

export default Item;
