import React, { useState, useContext } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import AddTodoForm from './AddTodoForm';
import {FirebaseContext} from '../contexts/FirebaseContext';

const AddTodoModal = () => {

    const [title, setTitle] = useState('');

    const {addTodo} = useContext(FirebaseContext);

    function submitForm() {
        addTodo({title});
    }

    return (
        <Modal trigger={<Button inverted>Agregar una tarea</Button>} closeIcon>
            <Header icon='tasks' content='Agregar una tarea' />
            <Modal.Content>
                <AddTodoForm title={title} setTitle={setTitle} />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={submitForm}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default AddTodoModal