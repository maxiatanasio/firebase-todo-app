import React from 'react';
import { Form } from 'semantic-ui-react';

export default function AddTodoForm({title, setTitle}) {
    return (
        <Form>
            <Form.Field>
                <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Field>
        </Form>
    )
}