
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import "./AppDesign.css";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./WelcomeMessage";
import TodoItemsContextProvider from "../store/ItemStore";

function Todoapp() {

    return (
        <TodoItemsContextProvider>
            <center className="todo-container">
                <AppName />
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
            </center>
        </TodoItemsContextProvider>
    );
}

export default Todoapp;
