import React from 'react'

const TodoList = ({data,dlt,Cmp}) => {
  return (
    <div>
        <h1>{data.task} -  {data.isComplited? 'Completed' : 'Not Completed'}</h1>
        <button type="button" onClick={()=>Cmp(data.id)}>Complite</button>
        <button type="button" onClick={()=>dlt(data.id)}>Delete</button>

    </div>
  )
}

export default TodoList