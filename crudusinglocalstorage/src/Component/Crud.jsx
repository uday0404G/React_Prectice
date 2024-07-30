import React, { useEffect, useState } from 'react'
import Data from './Data'
import { v4  } from 'uuid';
const Crud = () => {
  let [state,setState] = useState({
    id : v4(),
    name: '',
    Image: '',
    Price: '',
    Quantity: '',
  })
  let [arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])
  let [edit,setEdit] = useState(null)
  const handalChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})
  }
  const handalSubmit = (e)=>{
    e.preventDefault()

    if(edit==null){
    setArr([...arr,state])

  }
  else{
  
    setArr([...state])
    
  }
  setState({
    id : v4(),
    name: '',
    Image: '',
    Price: '',
    Quantity: ''
    })
}

  useEffect(()=>{
   localStorage.setItem('data',JSON.stringify(arr))
  },[arr])
  const handalEdit =(id)=>{
    let obj = arr.find((item)=>item.id===id)
    setState(obj)
  }
  const handalDelete=(id)=>{
    setArr(arr.filter((item)=>item.id!==id))
  }
  
  return (
    <>
    <form onSubmit={handalSubmit}>
      <input type="text" name="name" value={state.name} onChange={handalChange} placeholder="Product Name" />
      <input type="text" name="Image" value={state.Image} onChange={handalChange} placeholder="Product Image" />
      <input type="text" name="Price" value={state.Price} onChange={handalChange} placeholder="Product Price" />
      <input type="text" name="Quantity" value={state.Quantity} onChange={handalChange} placeholder="Product Quantity" />
      <input type="submit" value="Add" />
    </form>
    <Data arr={arr} handalEdit={handalEdit} handalDelete={handalDelete}/>
    </>
  )
}


export default Crud