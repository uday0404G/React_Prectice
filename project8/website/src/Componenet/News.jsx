import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import Logo from '../Home/Logo'

const News = () => {
  return (
    <>
    <div class="breadcrumb-section breadcrumb-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
                <div class="breadcrumb-text">
                    <p>Organic Information</p>
                    <h1>News Article</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="latest-news mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-news"><div class="latest-news-bg news-bg-1"></div></Link>
						<div class="news-text-box">
							<h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-news"><div class="latest-news-bg news-bg-2"></div></Link>
						<div class="news-text-box">
							<h3>A man's worth has its season, like tomato.</h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<p  class="read-more-btn">read more <i class="fas fa-angle-right"></i></p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-new"><div class="latest-news-bg news-bg-3"></div></Link>
						<div class="news-text-box">
							<h3><Link to="/single-new">Good thoughts bear good fresh juicy fruit.</Link></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<Link to="/single-new" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-news"><div class="latest-news-bg news-bg-4"></div></Link>
						<div class="news-text-box">
							<h3><Link to="/single-news">Fall in love with the fresh orange</Link></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<Link to="/single-news" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-news"><div class="latest-news-bg news-bg-5"></div></Link>
						<div class="news-text-box">
							<h3><Link to="/single-news">Why the berries always look delecious</Link></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<Link to="/single-news" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<Link to="/single-news"><div class="latest-news-bg news-bg-6"></div></Link>
						<div class="news-text-box">
							<h3><Link to="/single-news">Love for fruits are genuine of John Doe</Link></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 27 December, 2018</span>
							</p>
							<p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
							<Link to="/single-news" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="pagination-wrap">
								<ul>
									<li><a href="#">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a class="active" href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">Next</a></li>
								</ul>
							</div>
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

export default News