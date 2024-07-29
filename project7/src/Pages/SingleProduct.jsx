import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const SingleProduct = () => {

    const id=useParams()
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:3000/Products/${id.id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])
    if (!data) {
      return <div>Loading...</div>;
    }
  return (
    <>

    <Navbar/>
    <div>	<div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    
                    <div class="preview-pic tab-content">
                      {
                        data.images.map((el,index)=>(
                          <>
                           <div key={index} className={`tab-pane ${index === 0 ? 'active' : ''}`} id={`pic-${index + 1}`}>
                            <img src={el} />
                            </div>
                          </>
                        ))
                      }
                      
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                    {data.images.map((el,index)=>(
                      
                      <li key={index} className={index === 0 ? 'active' : ''}>
                        <a  data-target={`#pic-${index + 1}`}
                      data-toggle="tab" onClick={(e)=>e.preventDefault()}><img src={el} /></a>
                        </li>
                    
                    
                  ))
}
                      
                
                    </ul>
                    
                </div>
                <div class="details col-md-6">
                    <h3 class="product-title">{data.title}</h3>
                    <div class="rating">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <span class="review-no">  </span>
                    </div>
                    <p class="product-description">{data.description}</p>
                    <h4 class="price">current price: <span>₹{data.price}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">sizes:
                        <span class="size" data-toggle="tooltip" title="small">s</span>
                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                        <span class="size" data-toggle="tooltip" title="large">l</span>
                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 class="colors">colors:
                        <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span class="color green"></span>
                        <span class="color blue"></span>
                    </h5>
                    <div class="action">
                        <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></div>
                  </>
  )
}

export default SingleProduct