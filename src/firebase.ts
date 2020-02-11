import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {Todo} from './models/Todo';

firebase.initializeApp({
    apiKey: "AIzaSyAn1R-GDjN-MKzzjCTVi-5Ue_BkMATPtk0",
    authDomain: "todo-73310.firebaseapp.com",
    databaseURL: "https://todo-73310.firebaseio.com",
    projectId: "todo-73310",
    storageBucket: "todo-73310.appspot.com",
    messagingSenderId: "519450812961",
    appId: "1:519450812961:web:dcaf2310231b7a54673960"
});

export const db = firebase.firestore();

export const getTodos = async (): Promise<Todo[]> => {
    const snapshot = await db.collection('todos').get();
    const todos: Todo[] = [];
    snapshot.forEach(doc => {
        todos.push({
            id: doc.id,
            title: doc.data().title,
        });
    });
    return todos;
}

export const addTodo = async (todo : Todo): Promise<Todo> => {
    const docRef = await db.collection('todos').add(todo);
    return ({ ...todo, id: docRef.id });
} 