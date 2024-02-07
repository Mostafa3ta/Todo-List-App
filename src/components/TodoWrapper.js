import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodo from './EditTodo';
uuidv4();

export default function TodoWrapper() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    function addTodo(todo) {
        const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    function toggleComplete(id) {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    function deleteTodo(id) {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    function editTodo(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    function editTask(task, id) {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    function clearTodos() {
        setTodos([]);
        localStorage.removeItem('todos');
    }


    return <>
        <nav class="navbar">
            <div class="container-fluid">
                <h1 class="navbar-brand" href='#home'>
                    ToDo List
                    <i class="fa-solid fa-circle-check"></i>
                </h1>
            </div>
        </nav>

        <div className='container d-flex justify-content-center'>
            <div className='TodoWrapper'>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodo editTodo={editTask} task={todo} />
                    ) : (
                        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}

                {todos.length <= 1 ? null : <>
                    <button onClick={clearTodos} className='btn btn-danger btn-sm'>Clear All Tasks</button>
                </>}

            </div>
        </div>

        <footer>
            <div class="container">
                <div class="social-media ">
                    <a href="https://www.facebook.com/profile.php?id=100007766405910&ref=xav_ig_profile_web"
                        target="_blank" rel='noopener noreferrer'><i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/mostafa3ta_106?igsh=bXVoMm9yazcwdmlo" target="_blank" rel='noopener noreferrer'><i
                        class="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/Mostafa3ta" target="_blank" rel='noopener noreferrer'><i
                        class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0" target="_blank" rel='noopener noreferrer'><i
                        class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>

    </>
}
