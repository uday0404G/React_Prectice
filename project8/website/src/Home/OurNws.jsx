import React from 'react'
import { Link } from 'react-router-dom'

const OurNws = () => {
  return (
    <>	<div class="latest-news pt-150 pb-150">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
                <div class="section-title">	
                    <h3><span class="orange-text">Our</span> News</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="single-latest-news">
                    <Link to="/single-news"><div class="latest-news-bg news-bg-1"></div></Link>
                    <div class="news-text-box">
                        <h3><Link to="/single-news">You will vainly look for fruit on it in autumn.</Link></h3>
                        <p class="blog-meta">
                            <span class="author"><i class="fas fa-user"></i> Admin</span>
                            <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                        </p>
                        <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                        <Link to="/single-news" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-latest-news">
                    <Link to="/single-news"><div class="latest-news-bg news-bg-2"></div></Link>
                    <div class="news-text-box">
                        <h3><Link to="/single-news">A man's worth has its season, like tomato.</Link></h3>
                        <p class="blog-meta">
                            <span class="author"><i class="fas fa-user"></i> Admin</span>
                            <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                        </p>
                        <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                        <Link to="/single-news" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div class="single-latest-news">
                    <Link to="/single-news"><div class="latest-news-bg news-bg-3"></div></Link>
                    <div class="news-text-box">
                        <h3><Link to="/single-news">Good thoughts bear good fresh juicy fruit.</Link></h3>
                        <p class="blog-meta">
                            <span class="author"><i class="fas fa-user"></i> Admin</span>
                            <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
                        </p>
                        <p class="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                        <Link to="/single-snew" class="read-more-btn">read more <i class="fas fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center">
                <Link to="news" class="boxed-btn">More News</Link>
            </div>
        </div>
    </div>
</div></>
  )
}

export default OurNws