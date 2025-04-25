import React, { useState } from 'react'

export default function EditTodo({ editTodo, task }) {


  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="form-control todo-input" placeholder='Update task' />
      <button type="submit" className=' btn btn-warning'>Update Task</button>
    </form>
  )
}
