import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(
        {
            count: 0,
            a:5,
            b:15
        }
    )
    
   const handleInc = ()=>{
    setCount({...count,count : count.count +1,a : count.a + 10})
 }
 const handleDec = ()=>{
  setCount({...count,count : count.count - 1})
 }
  return (
    <div>
       <h1> count:{count.count} A:{count.a} b:{count.b}</h1>
    <button onClick={handleInc}>+</button>
    <button  onClick={handleDec}>-</button>
        </div>
  )
}

export default Counter