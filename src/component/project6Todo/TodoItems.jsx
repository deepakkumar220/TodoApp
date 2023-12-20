import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/ItemStore";


function TodoItems() {
    const contextObj= useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return (
        <>
        <div className="items-container">
            {todoItems.map((item) => (
            <TodoItem
                key={item.name}
                todoName={item.name}
                todoDate={item.dueDate}
            />
            ))}
        </div>
        </>
    );
}

export default TodoItems;
