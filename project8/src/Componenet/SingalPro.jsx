import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingProductData } from '../Redux/ProductReducer/action';
import { useDispatch, useSelector } from 'react-redux';

const SingalPro = () => {
  const id=useParams()
  const dispatch=useDispatch()
  const Sindata=useSelector((s)=>s.rootReducer)
  useEffect(()=>{
    SingProductData(dispatch)(id.id)
  },[])
  console.log(Sindata);
  return (
    <div  className="card col-5 h-auto" >
    <img src={Sindata.data.image} className="card-img-top h-75" alt={Sindata.data.title} />
    <div class="card-body">
      <h5 className="card-title">{Sindata.data.title}</h5>
      <p className="card-text">{Sindata.data.description}</p>
  
    </div>
  </div>
  )
}

export default SingalPro