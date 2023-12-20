import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/ItemStore';

function TodoItem({todoName,todoDate}) {
    const deleteObj = useContext(TodoItemsContext);
    const deleteItem= deleteObj.deleteItem;

    return (
        <div>
            <div className="container">
                <div className="row kg-row">
                    <div className="col-6">
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger kg-button" onClick={() =>deleteItem(todoName)}>
                        <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
