import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});

const tododItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if(action.type === 'NEW_ITEM') {
        newTodoItems = [
            ...currTodoItems,
            {name: action.payload.itemName, dueDate: action.payload.itemDueDate}
        ]
    }else if(action.type === 'DELETE_ITEM') {
        newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    }
    return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(tododItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
        type: "NEW_ITEM",
        payload: {
            itemName,
            itemDueDate,
        },
        };
        dispatchTodoItems(newItemAction);
    };

    const deleteItem = (todoItemName) => {
        const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
            itemName: todoItemName,
        },
        };
        dispatchTodoItems(deleteItemAction);
    };

    return(
        <TodoItemsContext.Provider
            value={{
            todoItems: todoItems,
            addNewItem: addNewItem,
            deleteItem: deleteItem,
            }}
        >
            {children}
    </TodoItemsContext.Provider>
    );
};

export default TodoItemsContextProvider;

// const [todoItems, setTodoItems] = useState([]);

/*
    const addNewItem = (itemName, itemDueDate) => {
        setTodoItems((currVal) =>[...currVal, { name: itemName,
                dueDate: itemDueDate,}
            ]);
    }
    */
/*
    const deleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
        setTodoItems(newTodoItems);
    }
    */
