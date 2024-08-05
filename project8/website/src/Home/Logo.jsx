import React from 'react';


const Logo = () => {
  return (
    <div className="logo-carousel-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="logo-carousel-inner">
              <div className="single-logo-item">
                <img src="../public/img/company-logos/1.png" alt="Company 1" />
              </div>
              <div className="single-logo-item">
                <img src="../public/img/company-logos/2.png" alt="Company 2" />
              </div>
              <div className="single-logo-item">
                <img src="../public/img/company-logos/3.png" alt="Company 3" />
              </div>
              <div className="single-logo-item">
                <img src="../public/img/company-logos/4.png" alt="Company 4" />
              </div>
              <div className="single-logo-item">
                <img src="../public/img/company-logos/5.png" alt="Company 5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
