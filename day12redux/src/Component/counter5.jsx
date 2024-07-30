import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { count1 } from '../Redux/action'

const Counter5 = () => {
    const dispatch=useDispatch()
    const data=useSelector(s=>s)
  return (
    <div>
        <h1>{data.count5}</h1>
        <button onClick={()=>dispatch(count1())}>+5</button>
    </div>
  )
}

export default Counter5