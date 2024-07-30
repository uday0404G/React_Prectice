import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { count } from '../Redux/action'

const Counter2 = () => {
  const value= useSelector(s=>s)
  const dispatch=useDispatch()
    return (
    <div>
        <h1>
            {value.count2}
        </h1>
        <button onClick={()=>{dispatch(count())}}>+2</button>
    </div>
  )
}

export default Counter2