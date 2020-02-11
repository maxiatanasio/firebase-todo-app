import React, {createContext, useState, FunctionComponent, useEffect} from 'react';
import { addTodo as addTodoFirebase, getTodos as getTodosFirebase } from '../firebase';
import {Todo} from '../models/Todo';

interface FirebaseContextInterface {
    todos: Todo[];
    addTodo: Function;
    getTodos: Function;
}

export const FirebaseContext = createContext({});



export const FirebaseContextProvider: FunctionComponent = ({children}) =>  {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodosFirebase().then(todos => setTodos(todos));
    }, [])

    const value: FirebaseContextInterface = {
        todos,
        async addTodo(todo: Todo) {
            const newTodo: Todo = await addTodoFirebase(todo);
            setTodos([...todos, newTodo]);
        },
        async getTodos() {
            const todos = await getTodosFirebase();
            setTodos(todos);
        }
    }

    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    )

}