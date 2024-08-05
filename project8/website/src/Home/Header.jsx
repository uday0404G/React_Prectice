import React from 'react'

const Header = () => {
  return (
	<>
   <div class="hero-area hero-bg">
   <div class="container">
	   <div class="row">
		   <div class="col-lg-9 offset-lg-2 text-center">
			   <div class="hero-text">
				   <div class="hero-text-tablecell">
					   <p class="subtitle">Fresh & Organic</p>
					   <h1>Delicious Seasonal Fruits</h1>
					   <div class="hero-btns">
						   <a href="shop.html" class="boxed-btn">Fruit Collection</a>
						   <a href="contact.html" class="bordered-btn">Contact Us</a>
					   </div>
				   </div>
			   </div>
		   </div>
	   </div>
   </div>
</div>
<div class="list-section pt-80 pb-80">
		<div class="container">

			<div class="row">
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="list-box d-flex align-items-center">
						<div class="list-icon">
							<i class="fas fa-shipping-fast"></i>
						</div>
						<div class="content">
							<h3>Free Shipping</h3>
							<p>When order over $75</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="list-box d-flex align-items-center">
						<div class="list-icon">
							<i class="fas fa-phone-volume"></i>
						</div>
						<div class="content">
							<h3>24/7 Support</h3>
							<p>Get support all day</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="list-box d-flex justify-content-start align-items-center">
						<div class="list-icon">
							<i class="fas fa-sync"></i>
						</div>
						<div class="content">
							<h3>Refund</h3>
							<p>Get refund within 3 days!</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	</>
  )
}

export default Header