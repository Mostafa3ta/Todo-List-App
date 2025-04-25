import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return <>
        <div className='container'>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input form-control " placeholder="What's the Plan for Today ?" />
                <button type="submit" className='btn btn-primary'>Add Task</button>
            </form>
        </div>
    </>
}
