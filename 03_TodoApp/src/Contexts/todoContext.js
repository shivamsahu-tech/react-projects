import React, { useContext } from 'react'

export const todoContext = React.createContext({
    todos: [],
    editTodo: () => {},
    addTodo: () => {}, 
    deleteTodo: () => {},
    toggleComplete: () => {}

});

export const TodoContextProvider = todoContext.Provider;

export function useTodo(){
    return useContext(todoContext);
} 