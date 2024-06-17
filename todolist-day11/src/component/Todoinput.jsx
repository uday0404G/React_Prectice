import React, { useState } from 'react';
import TodoList from './TodoList';
import './TodoInput.css'; // Import the CSS file

const TodoInput = () => {
    let [todo, setTodo] = useState("");
    let [arr, setArr] = useState([]);

    const input = () => {
        let obj = {
            id: Date.now(),
            task: todo,
            isComplited: false
        }
        setArr([...arr, obj]);
        setTodo(""); // Clear input field after adding task
    }

    const Delete = (id) => {
        let d = arr.filter((el) => el.id !== id);
        setArr(d);
    }

    const Complited = (id) => {
        let d = arr.map((el) => {
            if (el.id === id) {
                return { ...el, isComplited: !el.isComplited }
            } else {
                return el;
            }
        })
        setArr(d);
    }

    return (
        <div className="todo-container">
            <input
                type="text"
                placeholder='Todo Task'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="todo-input"
            />
            <button type="button" onClick={input} className="todo-button">Create</button>
            <div className="todo-list">
                {
                    arr.map((el) => {
                        return <TodoList data={el} key={el.id} dlt={Delete} cmp={Complited} />
                    })
                }
            </div>
        </div>
    );
}

export default TodoInput;
