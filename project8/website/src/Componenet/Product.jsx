import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductData } from '../Redux/ProductReducer/action'
import {  CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import Logo from '../Home/Logo'

const Product = () => {
  const dispacth=useDispatch()
  const ProData=useSelector((s)=>s.rootReducer)
  useEffect(()=>{
    ProductData(dispacth)
  },[])
 
  return (
    < >
    {ProData.isLoading ? <div className='d-flex justify-content-center align-items-center vh-100'>
      <CircularProgress isIndeterminate value={40} color='green.400'>
        <CircularProgressLabel>100%</CircularProgressLabel>
      </CircularProgress>
    </div>:
    <>
    <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>Fresh and Organic</p>
						<h1>Shop</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div class="product-section mt-150 mb-150">
		<div class="container">
			<div class="row product-lists">
					
    {ProData.data.map((el)=>{
      return(
     
				<div class="col-lg-4 col-md-6 text-center strawberry">
  <div class="single-product-item">
						<div class="product-image">
							<Link to={`/Product/${el.id}`}><img src={el.image} alt={el.title}/></Link>
						</div>
						<h3>{el.title}</h3>
						<p class="product-price"><span>Per Kg</span> {el.price}$ </p>
						<Link to="/cart" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</Link>
					</div>
				</div>

      )
    })}
    
				
			</div>

			
		</div>
	</div>
  <Logo/>
  <Footer/>
    
    </>
    }
    </>
  )
}

export default Product  