import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3" style={{ color: '#ffb524' }}>100% Organic Foods</h4>
            <h1 className="mb-5 display-3" style={{ color: '#81c408' }}>Organic Veggies & Fruits Foods</h1>
            <div className="position-relative mx-auto">
              <input 
                className="form-control border-2 w-75 py-3 px-4 rounded-pill" 
                id="searchInput" 
                type="search"
                placeholder="Search" 
                style={{ border: '1px solid #ffb524' }}
              />
              <button 
                className="btn border-2 py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: 0, right: '25%', backgroundColor: '#81c408' }} 
                id="submitButton"
              >
                Submit Now
              </button>
            </div>
            <div id="searchResults"></div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="../public/images/hero-img-1.png" 
                    className="img-fluid rounded" 
                    style={{ background: '#ffb524' }} 
                    alt="First slide"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Fruits</a>
                </div>
           
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
