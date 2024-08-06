import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    <>
<div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>See more Details</p>
						<h1>Single Product</h1>
					</div>
				</div>
			</div>
		</div>
	</div>	
  <div class="single-product mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="single-product-img">
						<img src={Sindata.data.image} alt={Sindata.data.title}/>
					</div>
				</div>
				<div class="col-md-7">
					<div class="single-product-content">
						<h3>{Sindata.data.title}</h3>
						<p class="single-product-pricing"><span>Per Kg</span> ${Sindata.data.price}</p>
						<p>{Sindata.data.description}</p>
						<div class="single-product-form">
							<form action="index.html">
								<input type="number" placeholder="1"/>
							</form>
							<Link to="/cart" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</Link>
							<p><strong>Categories: </strong>Fruits, Organic</p>
						</div>
						<h4>Share:</h4>
						<ul class="product-share">
							<li><p><i class="fab fa-facebook-f"></i></p></li>
							<li><p><i class="fab fa-twitter"></i></p></li>
							<li><p><i class="fab fa-google-plus-g"></i></p></li>
							<li><p><i class="fab fa-linkedin"></i></p></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="more-products mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">	
						<h3><span class="orange-text">Related</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6 text-center">
					<div class="single-product-item">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt=""/></a>
						</div>
						<h3>Strawberry</h3>
						<p class="product-price"><span>Per Kg</span> 85$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center">
					<div class="single-product-item">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt=""/></a>
						</div>
						<h3>Berry</h3>
						<p class="product-price"><span>Per Kg</span> 70$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
					<div class="single-product-item">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt=""/></a>
						</div>
						<h3>Lemon</h3>
						<p class="product-price"><span>Per Kg</span> 35$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
			</div>
		</div>
	</div>
   
    </>
  )
}

export default SingalPro