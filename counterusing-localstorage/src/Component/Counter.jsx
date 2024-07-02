import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0||Number(localStorage.getItem('count')))
    const handalClick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        localStorage.setItem('count',count)
    },[count])
  return (
    <>
    
    <h1>{count}</h1>
    <Button as="a" variant="primary" onClick={handalClick}>
    Pulse
  </Button>
    </>
  )
}

export default Counter