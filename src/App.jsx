import './App.css';
import React, { useState } from 'react'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    taskName: 'La primera tarea',
    done: false
  }])

  return (
    <div className="App">
      {/* <header className="App-header">
        My to do list
      </header> */}
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
