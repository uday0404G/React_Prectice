import React from 'react';

const Bestsellert = () => {
  return (
    <>
      {/* Weekly Sale Offer Section */}
      <div className="container-fluid d-flex aa py-lg-5 flex-wrap" style={{ height: 'auto' }}>
        <div className="col-12 col-lg-6">
          <img src="img/offer_img.png" className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-3 fw-bolder">Weekly Sale on 60% Off All Products</h1>
          <div className="col-12 pt-3 d-flex">
            <div className="col-3 border-end text-center">
              <small>DAYS</small>
              <h2>-1513</h2>
            </div>
            <div className="col-3 border-end text-center">
              <small>HOURS</small>
              <h2>03</h2>
            </div>
            <div className="col-3 border-end text-center">
              <small>MINUTES</small>
              <h2>58</h2>
            </div>
            <div className="col-3 border-end text-center">
              <small>SECONDS</small>
              <h2>59</h2>
            </div>
          </div>
          <br /><br />
          <input type="email" name="" id="" className="form-control" placeholder="Enter Email Address" /><br /><br />
          <button type="button" className="btn text-white" style={{ backgroundImage: 'linear-gradient(16deg, #ff005a 0%, #ff5d2d 64%, #ffba00 100%)' }}>BOOK NOW</button>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="container-fluid d-flex align-items-center flex-wrap" style={{ height: 'auto' }}>
        <h1 className="col-12">Best Sellers</h1>
        <div className="container h-auto">
          <div className="owl-carousel owl-theme row">
            {/* Best Sellers Items */}
            <div className="item col-3">
              <div className="aa ">
                <img src="img/product/product_4.png" alt="" className="img-fluid" />
                <div className="a">
                  <h4>Quartz Belt Watch</h4>
                  <p>$150.00</p>
                  <a href="" id="a" className="link-danger">+ ADD TO CART <i className="fa-regular fa-heart text-black"></i></a>
                </div>
              </div>
            </div>
            <div className="item col-3">
              <div className="aa">
                <img src="img/product/product_3.png" alt="" className="img-fluid" />
                <div className="a">
                  <h4>Quartz Belt Watch</h4>
                  <p>$150.00</p>
                  <a href="" id="a" className="link-danger">+ ADD TO CART <i className="fa-regular fa-heart text-black"></i></a>
                </div>
              </div>
            </div>
            <div className="item col-3">
              <div className="aa">
                <img src="img/product/product_2.png" alt="" className="img-fluid" />
                <div className="a">
                  <h4>Quartz Belt Watch</h4>
                  <p>$150.00</p>
                  <a href="" id="a" className="link-danger">+ ADD TO CART <i className="fa-regular fa-heart text-black"></i></a>
                </div>
              </div>
            </div>
            <div className="item col-3">
              <div className="aa">
                <img src="img/product/product_1.png" alt="" className="img-fluid" />
                <div className="a">
                  <h4>Quartz Belt Watch</h4>
                  <p>$150.00</p>
                  <a href="" id="a" className="link-danger">+ ADD TO CART <i className="fa-regular fa-heart text-black"></i></a>
                </div>
              </div>
            </div>
      
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestsellert;
