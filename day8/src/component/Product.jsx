

import React, { useState } from 'react'

const Product = () => {
   let [state,setState] = useState({
    name:"",
    img:"",
    pr:"",
    q:""
   })
   let [arr,setArr] = useState([])
   function add(e){
    let {name,value}=e.target;

    setState({...state,[name]:value})
   }
   function handleAddProduct(){
    setArr([...arr,state])
   }
  return (
    <div>
       <input type="text" className="form-control mb-2" placeholder="Product Name" onChange={add} name='name' />
  <input type="text" className="form-control mb-2" placeholder="Image URL" onChange={add} name='img' />
    <input type="text" className="form-control mb-2" placeholder="Price" onChange={add} name='pr' />
  <input type="text" className="form-control mb-2" placeholder="Quantity" onChange={add} name='q' />
<button className="btn btn-primary mr-2" onClick={handleAddProduct}>Add Product</button>
    {
      arr.map((e)=>{
        return(
        <div>
          <h1>{e.name}</h1>
          <img src={e.img} alt="" />
          <h2>Price: {e.pr}</h2>
          <h2>Quantity: {e.q}</h2>
        </div>
        )
      })
    }
    </div>
  )
}

export default Product