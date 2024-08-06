import React from 'react'
import Logo from '../Home/Logo'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div class="breadcrumb-section breadcrumb-bg">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 text-center">
						<div class="breadcrumb-text">
							<p>Fresh adn Organic</p>
							<h1>404 - Not Found</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="full-height-section error-section">
			<div class="full-height-tablecell">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 text-center">
							<div class="error-text">
								<i class="far fa-sad-cry"></i>
								<h1>Oops! Not Found.</h1>
								<p>The page you requested for is not found.</p>
								<Link to="/" class="boxed-btn">Back to Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <Logo/>
    <Footer/>
    </>
  )
}

export default Error