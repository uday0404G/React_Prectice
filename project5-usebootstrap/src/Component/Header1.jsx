import React from 'react';


const Header1 = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5 h-auto d-flex flex-wrap">
        <div className="col-11 col-lg-4 h-auto d-flex align-items-center">
          <div className="container h-100">
            <h1 className="display-2 fw-bolder">Wood & Cloth Sofa</h1>
            <p>
              Incididunt ut labore et dolore magna aliqua quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra
            </p>
            <button
              type="button"
              className="btn text-white"
              style={{
                backgroundImage: 'linear-gradient(16deg, #ff005a 0%, #ff5d2d 64%, #ffba00 100%)',
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
        <div className="text-end col-12 col-lg-8">
          <img src="img/banner_img.png" alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Header1;
