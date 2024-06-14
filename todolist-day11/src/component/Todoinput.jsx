import React, { useState } from 'react'
import TodoList from './TodoList'

const Todoinput = () => {
    let [todo,setTodo] = useState("")
    let [arr,setArr] = useState([])
    const input = () =>{
        let obj={
            id :Date.now(),
            task : todo,
            isComplited : false
        }
        setArr([...arr,obj])
    }
    const Delete = (id) =>{
        let d = arr.filter((el)=>{
            return el.id!==id
        })
        setArr(d)
    }
    const Complited = (id) =>{
        let d=arr.map((el)=>{
            if(el.id==id){
                return{...el,isComplited : !el.isComplited }
            }
            else{
                return el
            }
            })
        setArr(d)
    }
  return (
    <div>
        <input type="text" placeholder='Todo Task' onChange={(e)=>setTodo(e.target.value)} />
        <button type="button" onClick={input}>Create</button>
    {
        arr.map((el)=>{
         return   <TodoList data={el} key={el.id} dlt={Delete} cmp={Complited} />
        })
        }
    </div>
  )
}

export default Todoinput