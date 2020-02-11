import React, {useContext} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NoTodosMessage from './components/NoTodosMessage/NoTodosMessage';
import { Container } from 'semantic-ui-react';
import {FirebaseContext} from './contexts/FirebaseContext';
import AddTodoModal from './components/AddTodoModal';

function App() {

  const {todos} = useContext(FirebaseContext);

  return (
    <Container fluid>
      <div className="App">
      {todos.length > 0 ? 
      (
        <>
          <div className='main-screen-button'>
          <AddTodoModal />
          </div>
          <TodoList todos={todos} />
        </>
      ) :
      <NoTodosMessage />
      }
    </div>
    </Container>
    
  );
}

export default App;
