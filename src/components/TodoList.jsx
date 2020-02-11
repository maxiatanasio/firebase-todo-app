import React from 'react';

import PropTypes from 'prop-types';
import { Grid, Card, Button } from 'semantic-ui-react';

import './TodoList.css';

export default function TodoList({todos}) {

    return (
        <Grid className='main-grid'>
            {todos.map(todo => (
                <Grid.Column width="4" key={todo.id}>
                    <Card className='todo-card'>
                        <Card.Content>
                            <Card.Description className='todo-description'>
                                {todo.title}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button inverted color='green'>
                                    Done
                                </Button>
                                <Button inverted color='red'>
                                    Cancel
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
}