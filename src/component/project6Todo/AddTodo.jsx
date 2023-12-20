import React, { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/ItemStore";

function AddTodo({ onNewItem }) {

    const addNewObj = useContext(TodoItemsContext);
    const addNewItem = addNewObj.addNewItem;


    const todoNameElement = useRef();
    const dueDateElement = useRef();
    
    const handleAddButtonClicked = (e) => {
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value ="";
        dueDateElement.current.value ="";
        addNewItem(todoName, dueDate);
    };

    return (
        <div>
        <div className="container text-center">
            <form className="row kg-row"  onSubmit={handleAddButtonClicked}>
            <div className="col-6">
                <input
                type="text"
                ref={todoNameElement}
                placeholder="Enter Todo Here"
                />
            </div>
            <div className="col-4">
                <input ref={dueDateElement} type="date" />
            </div>
            <div className="col-2">
                <button
                type="submit"
                className="btn btn-success kg-button"
                >
                <IoIosAddCircle />
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default AddTodo;
