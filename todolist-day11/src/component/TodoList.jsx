import React from 'react';
import './TodoList.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ data, dlt, cmp }) => {
  return (
    <div className='todo-item'>
        <h1 className={`todo-item ${data.isComplited ? 'completed' : ''}`}>{data.task} - {data.isComplited ? "Completed" : "Not Completed"}</h1>
        <button type="button" onClick={() => cmp(data.id)} className="complete-button">{data.isComplited ?<FontAwesomeIcon icon={faXmark} /> :  <FontAwesomeIcon icon={faCheck} />}</button>
        <button type="button" onClick={() => dlt(data.id)} className="delete-button"> <FontAwesomeIcon icon={faTrash} /> Delete</button>
    </div>
  );
}

export default TodoList;
