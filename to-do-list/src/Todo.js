import { React, useState } from 'react'
import TodoForms from './TodoForms'
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
function Todo(todos, completeTodo, editTodo, deleteTodo) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
            <RiCloseCircleLine/>
            <AiFillEdit/>
            </div>

        </div>
    ))
}

export default Todo