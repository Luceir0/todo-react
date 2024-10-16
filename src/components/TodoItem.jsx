import React from 'react'

export function TodoItem({todo, toggleTodo}) {
  const { id, task, done } = todo

  const handleTodoClick = () => {
    toggleTodo(id)
  }

  return (
    <li>
      <input type="checkbox" checked={done} onChange={handleTodoClick}/>
      {task}
    </li>
  )
}