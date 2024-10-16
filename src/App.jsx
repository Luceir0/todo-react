import './App.css';
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { TodoList } from './components/TodoList'

const KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])

  const todoTaskRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.done = !todo.done
    setTodos(newTodos)
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value

    if (task === '') return

    setTodos((prevTodosArray) => {
      return [...prevTodosArray, {id: uuid(), task, done: false}]
    })

    todoTaskRef.current.value = null
  }

  const handleClearCompleted = () => {
    const todosToBeDone = todos.filter((todo) => !todo.done)
    setTodos(todosToBeDone)
  }

  return (
    <Fragment>
      <header>
        My to do list
      </header>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder='Nueva tarea'/>
      <button onClick={handleTodoAdd}>➕</button>
      <button onClick={handleClearCompleted}>🗑️</button>
      <div>Te quedan {todos.filter((todo) => !todo.done).length} tareas por terminar</div>
    </Fragment>
  );
}

export default App;
