import React from 'react';
import { Header } from 'semantic-ui-react';
import './NoTodosMessage.css';
import AddTodoModal from '../AddTodoModal';

export default function NoTodosMessage() {
    return (
        <div className='flex-container flex-center full-height flex-vertical'>
            <Header as="h2" className="NoTodosMessage">Dale vago! mira sino vas a tener nada que hacer...</Header>
            <AddTodoModal />
        </div>
    )
}