import React, { useEffect, useState } from 'react'
import './DataCrud.css'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Adddata } from '../Redux/AdminReducer/action'
const DataCrud = () => {
    const [Prodata,setProdata]=useState({
      
        title:"",
        price:"",
        image:"",
        description:"",
        category:""
    })
    const dispatch=useDispatch()
    const Data=useSelector((s)=>s.AdminReducer)
    const handalchange=(e)=>{
        const {name,value}=e.target
        setProdata({...Prodata,[name]:value})
    }
    const handalSubmit=(e)=>{
        e.preventDefault()
  
        Adddata(dispatch)(Prodata)
   
    }
    console.log(Data);
  return (
    <div className='body'>
     <form id="productForm" onSubmit={handalSubmit}>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handalchange} value={Prodata.title} />

        <label for="price">Price:</label>
        <input type="text" id="price" name="price" onChange={handalchange} value={Prodata.price}/>


        <label for="category">Category:</label>
        <select id="category" name="category" onChange={handalchange}  value={Prodata.category}>
            <option value="">Select Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
            </select>
            
        <label for="image">Image URL:</label>
        <input type="text" id="image" name="image" onChange={handalchange} value={Prodata.image}/>

       
        <label for="description">Description:</label>
        <textarea id="description" name="description" onChange={handalchange} rows="4" cols="50">{Prodata.value}</textarea>

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default DataCrud