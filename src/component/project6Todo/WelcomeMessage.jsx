import React, { useContext } from "react";
import { TodoItemsContext } from "../store/ItemStore";

function WelcomeMessage() {
    const contextObj= useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return todoItems.length === 0 && <div>Enjoy Your Day</div>;
}

export default WelcomeMessage;
