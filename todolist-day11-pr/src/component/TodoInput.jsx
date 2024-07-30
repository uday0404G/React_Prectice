import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoInput = () => {
  let [task,setTask] = useState("")
  let [arr,setArr] = useState([])
  const save=() =>{
    let obj={
        id: Date.now,
        task:task,
        isComplited:false
    }
    setArr([...arr,obj]);
  }
  const dlt = (id) => {
    let d=arr.filter((el)=>{
        return el.id !== id
    })
    setArr(d)
  }
  const Cmp = (id) => {
    let d=arr.map((el)=>{
        if(el.id==id){
            return {...el,isComplited : !el.isComplited}
        }
        else{
            return el
        }
    })
    setArr(d)
  }
    return (
    <div>
        <input type="text" placeholder='Task' onChange={(e)=>setTask(e.target.value)} />
        <button type="button" onClick={save}>Create</button>
        {
            arr.map((el)=>{
                return  <TodoList data={el} dlt={dlt} Cmp={Cmp} />
            })
        }
    </div>
  )
}

export default TodoInput