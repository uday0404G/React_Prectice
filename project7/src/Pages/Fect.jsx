import React from 'react';

const Fect = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users" style={{ color: '#FFB524' }}></i>
                  <h4 style={{ color: '#81c408' }}>satisfied customers</h4>
                  <h1 className="text-secondary">1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users" style={{ color: '#FFB524' }}></i>
                  <h4 style={{ color: '#81c408' }}>quality of service</h4>
                  <h1 className="text-secondary">99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users" style={{ color: '#FFB524' }}></i>
                  <h4 style={{ color: '#81c408' }}>quality certificates</h4>
                  <h1 className="text-secondary">33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users" style={{ color: '#FFB524' }}></i>
                  <h4 style={{ color: '#81c408' }}>Available Products</h4>
                  <h1 className="text-secondary">789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fect;
