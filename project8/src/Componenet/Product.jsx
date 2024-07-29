import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductData } from '../Redux/ProductReducer/action'
import {  CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Product = () => {
  const dispacth=useDispatch()
  useEffect(()=>{
    ProductData(dispacth)
  },[])
  const ProData=useSelector((s)=>s)
  console.log(ProData)
  return (
    < >
    {ProData.isLoading ? <div className='d-flex justify-content-center align-items-center vh-100'>
      <CircularProgress isIndeterminate value={40} color='green.400'>
        <CircularProgressLabel>100%</CircularProgressLabel>
      </CircularProgress>
    </div>:
    
    <div className='container  row border ' >
    {ProData.data.map((el)=>{
      return(
       <Link to={`/product/${el.id}`} className="card col-3 h-auto"key={el.id} >
  <img src={el.image} className="card-img-top h-75" alt={el.title} />
  <div class="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text"></p>

  </div>
</Link>
      )
})}
      </div>
    }
    </>
  )
}

export default Product