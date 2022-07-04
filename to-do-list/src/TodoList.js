import { React, useState, useEffect } from 'react';
import TodoForms from './TodoForms';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        //returns if no input or having many spaces
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isComplete: !todo.isComplete
                }
            }
            return todo;
        })
        setTodos(updatedTodos);}
    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForms onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
            >

            </Todo>
        </div>
    )
}

export default TodoList