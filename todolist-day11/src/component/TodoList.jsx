import React from 'react'

const TodoList = ({data,key,dlt,cmp}) => {
  return (
    <div key={key}>
        <h1>{data.task} - {data.isComplited ? "Complited" : "Not Complited "}</h1>
        <button type="button" onClick={()=>cmp(data.id)}>Complited</button>
        <button type="button" onClick={()=>dlt(data.id)}>Delete</button>
    </div>
  )
}

export default TodoList