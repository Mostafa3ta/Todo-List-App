import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function Todo({ task, deleteTodo, editTodo, toggleComplete }) {

    return (
        <div className={`${task.completed ? "completed-todo Todo" : "incompleted-todo Todo"}`}>
            <div className='p' onClick={() => toggleComplete(task.id)}>
                <p className={`${task.completed ? "completed" : "incompleted"}`} >{task.task}</p>
            </div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    )
}
