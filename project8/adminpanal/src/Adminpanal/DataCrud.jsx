import React, { useEffect, useState } from 'react'
import './DataCrud.css'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { Adddata, Deletedata, Showdata,Editdata } from '../Redux/AdminProductReducer/action'

const DataCrud = () => {
    const [Prodata,setProdata]=useState({
        title:"",
        price:"",
        image:"",
        description:"",
        category:""
    })
    const [isEdit, setIsEdit] = useState(false);
    const [editid,setEditid] =useState(null)
    const dispatch=useDispatch()
    const Data=useSelector((s)=>s.AdminReducer)
    // const [obj,setObj]=useState({})
    const navigate=useNavigate()
    const handalchange=(e)=>{
        const {name,value}=e.target
        setProdata({...Prodata,[name]:value})
    }
    const handalSubmit=(e)=>{
        e.preventDefault()
        
       
            isEdit? Editdata(dispatch)(editid,Prodata):
            Adddata(dispatch)(Prodata)
            
        
    }


    useEffect(() => {
        Showdata(dispatch)       
    },[dispatch])
  
  
   const handleClick=(id)=>{
    Deletedata(dispatch)(id)
   }
   const handleEdit=(el)=>{
       setProdata(el)
       setIsEdit(true)
       setEditid(el.id)
   }

  return (
    <div>

    <div className='body'>
     <form id="productForm" onSubmit={handalSubmit}>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required onChange={handalchange} value={Prodata.title} />

        <label for="price">Price:</label>
        <input type="text" id="price" name="price" required onChange={handalchange} value={Prodata.price}/>


        <label for="category">Category:</label>
        <select id="category" name="category" required onChange={handalchange}  value={Prodata.category}>
            <option value="">Select Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
            </select>
            
        <label for="image">Image URL:</label>
        <input type="text" id="image" name="image" required onChange={handalchange} value={Prodata.image}/>

       
        <label for="description">Description:</label>
        <textarea id="description" name="description" required onChange={handalchange} rows="4" cols="50">{Prodata.value}</textarea>

        <input type="submit" value={isEdit ? "Edit Product" : "Add Product"} />
    </form>
    </div>
    <div className='container-fluid'>
      <table className='table table-bordered'>
        <thead>
          <tr>
          <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.Show.map((el) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td><img src={el.image} className="img-fluid" alt={el.title} style={{ width: '100px', height: 'auto' }} /></td>
                  <td>{el.title}</td>
                  <td>${el.price}</td>
                  <td>{el.category}</td>
                  <td>{el.description}</td>
                  <td>
                    <button 
                      className='btn btn-danger' 
                      onClick={() => handleClick(el.id)}
                    >
                      Delete
                    </button>
                    <button className='btn btn-primary' onClick={() => handleEdit(el)}>Edit</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    </div>
  
  )
}

export default DataCrud